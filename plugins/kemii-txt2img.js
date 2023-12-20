let Replicate = require("replicate")
let translate = require('@vitalets/google-translate-api')

let handler = async (m, { args, usedPrefix, text, command }) => {
     if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix}${command} 1girl, solo, ponytail, blush.`, m)
    const replicate = new Replicate({
        auth: 'r8_XddvTJVJFvvOuD9dFXYobRNZTdT7jv908806m',
    });
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
	const tks = await translate(text, { to: 'en' });
	console.log(tks.text) // => 'Hello World! How are you?'
	const output = await replicate.run(
        "mcai/absolutebeauty-v1.0:d6558ad723d87f42923b40354489aac67e7d893a7c5f8a88c1c393d2be4fbcdb",
        {
            input: {
                prompt: tks.text,
				negative_prompt: "(low quality:1.3), (worst quality:1.3),(monochrome:0.8),(deformed:1.3),(malformed hands:1.4),(poorly drawn hands:1.4),(mutated fingers:1.4),(bad anatomy:1.3),(extra limbs:1.35),(poorly drawn face:1.4),(watermark:1.3),disfigured, text, kitsch, ugly, oversaturated, greain, low-res, deformed, blurry, bad anatomy, poorly drawn face, mutation, mutated, extra limb, poorly drawn hands, missing limb, the tongue is damaged when licking, floating limbs, disconnected limbs, malformed hands, blur, out of focus, long neck, long body, disgusting, poorly drawn, childish, mutilated, mangled, old, surreal, calligraphy, sign, writing, watermark, text, body out of frame, extra legs, extra arms, extra feet, out of frame, poorly drawn feet, cross-eye, face doesn't match, shiny body, anime pictures, floating lips, clipped lips",
				width: 512,
				height: 768,
				guidance_scale: 5,
				num_inference_steps: 25,
				scheduler: 'DPMSolverMultistep'
            }
        }
    );
    console.log(output)

    await conn.sendFile(m.chat, output[0], '', done, m)
};
handler.help = ['txt2img *<text>*'];
handler.command = /^txt2img$/i;
handler.tags = ['internet','ai'];
handler.register = true;
handler.premium = false;
handler.limit = true;

module.exports = handler;
