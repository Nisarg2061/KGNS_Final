from config import db

class Vendors(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), unique=False, nullable=False)
    email = db.Column(db.String(150), unique=True, nullable=False)
    mobile = db.Column(db.String(10), nullable=False)

    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "mobile": self.mobile
        }

class Bill(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(255))
    hsn_sac = db.Column(db.Integer)
    gst_rate = db.Column(db.String(10))
    quantity = db.Column(db.Float)
    rate = db.Column(db.Float)
    unit = db.Column(db.String(50))

    def to_json(self):
        return {
            "Description of Goods": self.description,
            "HSN/SAC": self.hsn_sac,
            "GST Rate": self.gst_rate,
            "Quantiry (KG)": self.quantity,
            "Rate": self.rate,
            "Unit": self.unit,
            "Amount": self.amount
        }

    @property
    def amount(self):
        return self.quantity * self.rate