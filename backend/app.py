from flask import Flask, render_template, jsonify, request
from config import app, db
from models import Vendors

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/vendors", methods=["GET"])
def load_vendors():
    vendor = Vendors.query.all()
    json_vendors = list(map(lambda x: x.to_josn(), vendor))
    return jsonify({"vendor" : json_vendors})

@app.route("/vendors_add", methods=["POST"])
def add_vendor():
    Name = request.json.get("name")
    Email = request.json.get("email")
    if not Name or not Email:
        return (
            jsonify({"message":"You must enter both"}),
            400,
            )
    
    new_vendor = Vendors(name=Name, email=Email)
    try:
        db.session.add(new_vendor)
        db.session.commit()
    except Exception as e:
        return jsonify({"Message":str(e)}), 400
    
    return jsonify({"Message" : "New Vendor added!"}), 201

@app.route("/vendors/edit/<int:user_id>", methods=["PATCH"])
def edit_vendor(user_id):
    vendor = Vendors.query.get(user_id)

    if not vendor:
        return jsonify({"Message":"Vendor id not found!"}), 404

    data = request.json
    vendor.Name = data.get("name", vendor.Name)
    vendor.Email = data.get("email", vendor.Email)

    db.session.commit()
    return jsonify({"Message" : "Vendor details updated!"}), 200

@app.route("/vendor/delete_vendor/<int:user_id>" , methods=["DELETE"])
def delete_vendor(user_id):
    vendor = Vendors.query.get(user_id)

    if not vendor:
        return jsonify({"Message":"Vendor id not found!"}), 404

    db.session.delete(vendor)
    db.session.commit()

    return jsonify({"Message" : "Vendor Deleted!"}), 200

@app.route("/contact")
def contact_team():
    return render_template('contact.html')
# @app.route("/api/vendors_list")
# def list_vendors():
#     return jsonify("Hello World!")


if __name__=="__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)


