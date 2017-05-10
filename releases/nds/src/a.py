#coding:utf-8
import urllib
import urllib.request
import http.cookiejar
import re


website = '91.t9n.space'
url = "http://"+website+"/viewthread.php?tid=229471"
# postdata =urllib.parse.urlencode({
# "Logon_Password":"sunmin",
# "Logon_PostCode":"fghc",
# "Logon_RememberMe":"false",
# "Logon_UserEmail":"sun121@qq.com"
# }).encode('utf-8')
header = {
"Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
"Accept-Encoding":"utf-8",
"Accept-Language":"zh-cn,zh;q=0.8,en-us;q=0.5,en;q=0.3",
"Connection":"keep-alive",
"Host": website,
"Referer":"http://www.google.com/",
"User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64; rv:32.0) Gecko/20100101 Firefox/32.0"
}
# req = urllib.request.Request(url,postdata,header)
req = urllib.request.Request(url=url, headers=header)
##print(urllib.request.urlopen(req).read().decode('utf-8'))

#自动记住cookie
cj = http.cookiejar.CookieJar()

opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cj))
r = opener.open(req)
content = r.read().decode('utf-8')
# print(content)


f = open('test.txt', 'w')
f.write(content)
f.close()

jpg_link = 'http://'+website+'/attachments/17050912066081299656a127b8.jpg'
path = 'aaa.jpg'
rq = urllib.request.Request(url = jpg_link, headers= header)
response = urllib.request.urlopen(rq)
data = response.read()
f = open(path, 'wb')
f.write(data)
f.close()
