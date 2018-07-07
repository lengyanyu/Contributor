/**
 * Created by Rebecca_Han on 16/10/26.
 */
module.exports = {

}

var index= {
    "id": 1,
        "data": [
        {
            "question_id": 1,
            "answer_id": 3,
            "feed_source_id": 23,
            "feed_source_name": "吴泽煜",
            "feed_source_txt": "给了个赞",
            "feed_source_img": "../../images/new1.png",
            "question": "设主存容量为256K字，Cache容量为2K字， 块长为4。 （1）设计Cache地址格式，Cache中可装入多少块 数据？ （2）在直接映射方式下，设计主存地址格式。 （3）在四路组相联映射方式下，设计主存地址格 式。 （4）在全相联映射方式下，设计主存地址格式。 （5）若存储字长为32位，存储器按字节寻址，写 出上述三种映射方式下主存的地址格式",
            "answer_ctnt": "存储器（主存和缓存地址）以八位二进制为一个基本单元,也就是一个字节,每个存储单元对应着一个地址主存容量为512KB=512k*1B（数据线8根即8位），主存地址看地址总线19位即512K，数据总线为3根，表示8位1B只有直接映射方式下，主存子块标记可用主存容量/Cache容量",
            "good_num": "112",
            "comment_num": "18"
        },
        {
            "question_id": 2,
            "answer_id": 25,
            "feed_source_id": 24,
            "feed_source_name": "吴泽煜媳妇",
            "feed_source_txt": "也给了个赞",
            "feed_source_img": "../../images/new2.png",
            "question": "某 8 位微型机地址码为 18 位，若使用 4K× 4 位的 RAM 芯片组成模块板结构的存储器，试问：（1）该机所允许的最大主存空间是多少？（2）若每个模块板为 32K×8 位，共需几个模块板？（3）每个模块板内共有几片 RAM 芯片？（4）共有多少片 RAM ？（5）CPU 如何选择各模块板？",
            "answer_ctnt": "1）该机所允许的最大主存空间是： 2^18× 8 位 = 256K ×8 位 = 256KB2）模块板总数 = 256K × 8 / 32K × 8 = 8 块（3）板内片数 = 32K ×8 位 / 4K × 4 位 = 8 ×2 = 16 片（4）总片数 = 16 片×8 = 128 （5）CPU 通过最高 3 位地址译码输出选择模板，次高 3 位地址译码输出选择芯片。地址格式分配如下：模块板是8位的，每两个芯片组成一个芯片地址，一共16片，8个地址",
            "good_num": "112",
            "comment_num": "18"
        }

    ]

}
module.exports.index = index;