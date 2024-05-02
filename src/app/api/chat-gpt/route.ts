import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(request: Request) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY as string,
  });

  const { prompt } = await request.json();

  /* const dentalKeywords = ['dentist', 'dental', 'teeth', 'tooth', 'gum', 'orthodontic', 'implants', 'braces'];

  const containsDentalKeyword = dentalKeywords.some(keyword => prompt.toLowerCase().includes(keyword));

  if (!containsDentalKeyword) {
    return NextResponse.json({
      model: 'gpt-4-turbo',
      choices: [{
        message: {
          content: "Sorry, I can only provide information related to dentistry. Please ask a dental-related question."
        }
      }]
    });
  } */

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content:
          'You are an AI trained to answer questions specifically about dentistry,you will be used to answer activities and tests, so if it is a question related to a topic, always try to do it separately with a title and subtitles, if it is a test question, answer the alternative first and then a simple and direct text about why you chose that alternative',
      },
      { role: 'user', content: prompt },
    ],
    temperature: 0,
    max_tokens: 1024,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  return NextResponse.json(response);
}
