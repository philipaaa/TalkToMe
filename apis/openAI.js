import OpenAI from "openai";
import { OPENAI_API_KEY } from '@env';

const openai = new OpenAI({apiKey: OPENAI_API_KEY});

export default async function getPersonaImage({ firstName, lastName, age, occupation, location }) {
    try {
      const response = await openai.images.generate({
        prompt: `A portrait of ${firstName} ${lastName}, a ${age}-year-old ${occupation} from ${location}.`,
        n: 8, // number of images to generate
        size: "512x512"
      });
      return response.data;
    } catch (error) {
      console.error("Error generating image:", error);
      throw error;
    }
  }
