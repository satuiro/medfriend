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
  // this is just a sample response from Openai API, use this instead of runPrompt() to save api credits
  // res.send(
  //   '{"response":{"bmi":70,"health":"healthy","bmr":2107.14,"dietchart":"For your age and gender, a balanced diet containing fruits, vegetables, whole grain, lean meats, and healthy fats. Avoid processed and fried foods, sugary drinks and unhealthy snacks. Make sure to get plenty of sleep, stay hydrated and find ways to destress 🥕 🥗 🥝 🥥 🌰 🥞 🥓 🍗 🍖 🍤 🥗 🍱 🍘 🍯 🍮 🍩 🍪 🍰 🍦 🍫","workout":" Firstly, warming up is a must 🏃‍♂️. Examples of cardio include running jogging or dancing 🕺. Strength training with bodyweight exercises or dumbbells to build muscle is recommended 💪.Lastly, include some relaxing breathing or yoga sessions for stretching and mindfulness🧘‍♂️.","cardio":" Cardio is any exercise that increases your heart rate and causes you to sweat. Examples include running, jogging, swimming, skip rope etc. ⏱⏱⏱. A combination of cardio and strength training is preferred, but you can also choose to do only cardio workouts."}}'
  // );
}
