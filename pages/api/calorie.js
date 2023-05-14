const { Configuration, OpenAIApi } = require("openai");
const config = new Configuration({
  apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(config);
export default async function handler(req, res) {
  const { age, gender, height, weight, diet, allergies } = JSON.parse(req.body);
  //   console.log(age, gender, height, weight, diet, allergies);
  const runPrompt = async () => {
    console.log("function called");
    const prompt = `
        calculate the bmi where height is ${height} in centimeters and weight is ${weight}kg also specify the health of person according to the bmi
        lying in the category of underweight overweight and healthy. Then also calculate the bmr value of the person where height is ${height} in metres, weight is ${weight}, age is ${age}, the diet the 
        person follows is ${diet}, and the gender is ${gender} also recommend a diet chart for the person according to their allergies ${allergies}, bmr value, age and gender. Also recommend a weekly workout and cardio plan for the person and add emoji to the workout,cardio and diet chart response accordingly. 
        
        Return response in the following parsable JSON format:

        {
            "bmi":"bmi_person", 
            "health":"health_of_person",
            "bmr":"bmr_person", 
            "dietchart":"diet_chart_of_person",
            "workout":"workout_of_person", 
            "cardio":"cardio_plan"   
        }

    `;

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 2048,
      temperature: 1,
    });

    const parsableJSONresponse = response.data.choices[0].text;
    console.log(parsableJSONresponse);
    // const parsedResponse = JSON.parse(parsableJSONresponse);
    res.send(JSON.stringify(parsableJSONresponse));
  };
  runPrompt();
}
