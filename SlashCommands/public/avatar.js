var _0x59f4=["\x64\x69\x73\x63\x6F\x72\x64\x2E\x6A\x73","\x65\x78\x70\x6F\x72\x74\x73","\x73\x65\x74\x52\x65\x71\x75\x69\x72\x65\x64","\x53\x65\x6C\x65\x63\x74\x20\x54\x68\x65\x20\x55\x73\x65\x72","\x73\x65\x74\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x75\x73\x65\x72","\x73\x65\x74\x4E\x61\x6D\x65","\x61\x64\x64\x55\x73\x65\x72\x4F\x70\x74\x69\x6F\x6E","\x47\x65\x74\x20\x61\x20\x75\x73\x65\x72\x27\x73\x20\x61\x76\x61\x74\x61\x72\x2E","\x61\x76\x61\x74\x61\x72","\x67\x65\x74\x55\x73\x65\x72","\x6F\x70\x74\x69\x6F\x6E\x73","\x52\x65\x71\x75\x65\x73\x74\x65\x64\x20\x62\x79\x20","\x74\x61\x67","","\x64\x69\x73\x70\x6C\x61\x79\x41\x76\x61\x74\x61\x72\x55\x52\x4C","\x73\x65\x74\x46\x6F\x6F\x74\x65\x72","\x73\x65\x74\x49\x6D\x61\x67\x65","\x52\x61\x6E\x64\x6F\x6D","\x73\x65\x74\x43\x6F\x6C\x6F\x72","\x73\x65\x74\x55\x52\x4C","\x41\x76\x61\x74\x61\x72\x20\x55\x52\x4C","\x73\x65\x74\x4C\x61\x62\x65\x6C","\x73\x65\x74\x53\x74\x79\x6C\x65","\x61\x64\x64\x43\x6F\x6D\x70\x6F\x6E\x65\x6E\x74\x73","\x72\x65\x70\x6C\x79"];
const {Client,ChatInputCommandInteraction,SlashCommandBuilder,EmbedBuilder,ButtonBuilder,ButtonStyle,ActionRowBuilder}=require(_0x59f4[0]);
module[_0x59f4[1]]= {data: new SlashCommandBuilder()[_0x59f4[6]](_0x59f4[9])[_0x59f4[4]](_0x59f4[8])[_0x59f4[7]]((_0x7246x1)=>
{
	return _0x7246x1[_0x59f4[6]](_0x59f4[5])[_0x59f4[4]](_0x59f4[3])[_0x59f4[2]](false)
}
),execute:async function(_0x7246x2,_0x7246x3)
{
	const _0x7246x4=_0x7246x2[_0x59f4[11]][_0x59f4[10]](_0x59f4[5])|| _0x7246x2[_0x59f4[5]];
	const _0x7246x5= new EmbedBuilder()[_0x59f4[19]](_0x59f4[18])[_0x59f4[17]](_0x7246x4[_0x59f4[15]]({size:4096}))[_0x59f4[16]]({text:`${_0x59f4[12]}${_0x7246x2[_0x59f4[5]][_0x59f4[13]]}${_0x59f4[14]}`,iconURL:_0x7246x2[_0x59f4[5]][_0x59f4[15]]()});
	const _0x7246x6= new ActionRowBuilder()[_0x59f4[24]]( new ButtonBuilder()[_0x59f4[23]](ButtonStyle.Link)[_0x59f4[22]](_0x59f4[21])[_0x59f4[20]](_0x7246x4[_0x59f4[15]]({size:4096})));
	_0x7246x2[_0x59f4[25]]({embeds:[_0x7246x5],components:[_0x7246x6]})
}
}  