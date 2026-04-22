from extensions import db


class Student(db.Model):
    __tablename__ = "students"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(255), nullable=False)
    age = db.Column(db.Integer, nullable=True)
    course = db.Column(db.String(255), nullable=False, default="N/A")
    gender = db.Column(db.String(64), nullable=False, default="N/A")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "age": self.age,
            "course": self.course,
            "gender": self.gender,
        }
