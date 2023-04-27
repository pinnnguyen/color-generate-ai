import { Configuration, OpenAIApi } from 'openai'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)
  if (!body.prompt) {
    return createError({
      statusCode: 400,
      message: 'Missing prompt',
    })
  }

  const prompts = `
  I want you to act like a designer. I will give you a context where you will generate hex color code and force return the result as json , like this 
  "{
    "bg": "#F5F3F7",
    "bgFocus": "#E9E4ED",
    "primaryClear": "#8B5FBF",
    "primaryDull": "#61398F",
    "primaryVisible": "#FFFFFF",
    "accentClear": "#D6C6E1",
    "accentDull": "#9A73B5",
    "delete": "#4A4A4A",
    "dull": "#878787",
    "duller": "#FFFFFF",
    }", my background is: ${body.prompt}`

  // if (body.isURL) {
  //   prompts = `
  //    I want you to act as an professional designer,
  //    I will provide you a web page Your task is to get the most used colors on that web and the Data you return to me must be in the following format
  //   "{
  //     "bg": "#F5F3F7",
  //     "bgFocus": "#E9E4ED",
  //     "primaryClear": "#8B5FBF",
  //     "primaryDull": "#61398F",
  //     "primaryVisible": "#FFFFFF",
  //     "accentClear": "#D6C6E1",
  //     "accentDull": "#9A73B5",
  //     "delete": "#4A4A4A",
  //     "dull": "#878787",
  //     "duller": "#FFFFFF",
  //     }"
  //     That site is "${body.prompt}"
  //   `
  // }

  const configuration = new Configuration({
    apiKey: config.OPEN_API_KEY,
  })

  const openai = new OpenAIApi(configuration)
  const completion = await openai.createChatCompletion({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompts }],
  })

  if (completion.data.choices[0].message) {
    try {
      const string = completion.data.choices[0].message.content
      const jsonStartIndex = string.indexOf('{')
      const jsonEndIndex = string.indexOf('}')
      const jsonString = string.slice(jsonStartIndex, jsonEndIndex + 1)
      const colorScheme = JSON.parse(jsonString)

      return colorScheme
    }

    catch (e: any) {
      return createError({
        statusCode: 400,
        statusMessage: e.statusMessage,
      })
    }
  }

  return null
})
