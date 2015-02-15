var subject = require('./subject.js')
var mock = require('mock-fs');
subject.inc('53.427478205412626',undefined);
subject.inc('-2.854495427389841','5.342747820541263');
mock({"path/fileExists":{},"pathContent":{"file1":"text content"}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"pathContent":{"file1":"text content"}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"path/fileExists":{}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"pathContent":{"file1":""}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
subject.normalize('');
subject.format('251-073-1096','(###) ###-#### x#####',{normalize:true});
subject.blackListNumber('052-707-8715');
subject.blackListNumber('212-707-8715');