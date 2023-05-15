const { Configuration, OpenAIApi } = require("openai");
const config = new Configuration({
  apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(config);
export default async function handler(req, res) {
  const { age, gender, height, weight, lifestyle, symptoms, medicalrecord } =
    JSON.parse(req.body);
  //   console.log(age, gender, height, weight, diet, allergies);
  const runPrompt = async () => {
    console.log("function called");
    const prompt = `
    Offer a general medical advice and give the appropriate cause of symptoms,what health issue person might be suffering from 
    and the treatment for the health issue that may include medical test,general treatment for the person where the height is ${height}, 
    weight is ${weight}, age is ${age},gender of the person is ${gender}, the lifestyle of person include diet as ${lifestyle} ,the previous medical history of person is ${medicalrecord} and the symptoms are ${symptoms}.
    Return response in the following parsable JSON format:

    {
        "cause":"cause_of_symptoms", 
        "healthIssue":"health_issue_person",
        "treatment":"treatment_for_disease"

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
    res.send(JSON.stringify({ response: parsableJSONresponse }));
  };
  runPrompt();
}
