from flask import render_template, jsonify, request
from flask import Flask
from config import app, db
from models import Vendors,Bill

@app.route("/")
def home():
    return "Welcome to our API"

@app.route("/vendors", methods=["GET"])
def load_vendors():
    vendor = Vendors.query.all()
    json_vendors = list(map(lambda x: x.to_json(), vendor))
    return jsonify({"vendor" : json_vendors})

@app.route("/vendors/add", methods=["POST"])
def add_vendor():
    Name = request.json.get("name")
    Email = request.json.get("email")
    Mobile = request.json.get("mobile")
    if not Name or not Email:
        return (
            jsonify({"message":"You must enter both"}),
            400,
            )
    
    new_vendor = Vendors(name=Name, email=Email, mobile=Mobile)
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
    vendor.Mobile = data.get("mobile", vendor.Mobile)

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

@app.route("/bills", methods=["GET"])
def load_bills():
    bills = Bill.query.all()
    json_bills = [bill.to_json() for bill in bills]
    return jsonify({"bills": json_bills})

@app.route("/bills/add", methods=["POST"])
def add_bill():
    data = request.json
    description = data.get("description")
    hsn_sac = data.get("hsn_sac")
    gst_rate = data.get("gst_rate")
    quantity = data.get("quantity")
    rate = data.get("rate")
    unit = data.get("unit")
    
    # if not all([description, hsn_sac, gst_rate, quantity, rate, unit]):
    #     return jsonify({"message": "All fields are required"}), 400
    
    new_bill = Bill(
        description=description,
        hsn_sac=hsn_sac,
        gst_rate=gst_rate,
        quantity=quantity,
        rate=rate,
        unit=unit
    )
    
    db.session.add(new_bill)
    db.session.commit()
    
    return jsonify({"message": "New bill added!"}), 201


if __name__=="__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)


