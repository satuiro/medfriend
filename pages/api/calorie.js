export default function handler(req, res) {
  const { age, gender, height, weight, diet, allergies } = JSON.parse(req.body);
  console.log(age, gender, height, weight, diet, allergies);
}
