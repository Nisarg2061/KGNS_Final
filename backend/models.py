from config import db

class Vendors(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), unique=False, nullable=False)
    email = db.Column(db.String(150), unique=True, nullable=False)

    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
        }