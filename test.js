let msg = [{
    name: '张三',
    age: 20,
    strengths: 'JavaScript',
    avatar:'https://tse4-mm.cn.bing.net/th/id/OIP-C.39mOMBjUfsK-HL9jUbv1MwHaE7?pid=ImgDet&rs=1',
    email: 'yunding@qq.com',
    password: 33333
},
{
    name: '李四',
    age: 19,
    strengths: 'python',
    avatar:'https://tse2-mm.cn.bing.net/th/id/OIP-C.YlKimVo94OkaZDZCzPIDpAHaFh?pid=ImgDet&rs=1',
    email: '12345678@163.com',
    password: 11111
},
{
    name: '王五',
    age: 18,
    strengths: 'Java',
    avatar:'https://tse2-mm.cn.bing.net/th/id/OIP-C.P2hK9SRjhFE8WM9N8tgWFAHaEQ?pid=ImgDet&rs=1',
    email: 'yundingshuyuan@qq.cn',
    password: 222222
},
]
function warning()
{
   alert("邮箱或密码错误"); 
}
function verify(email,password)
{
    let bool=false;
    let num;
    for (let i=0;i<=2;i++)
    {
        if (email==msg[i].email)
        {
            num=i;
            bool=true;
        }
    }            
    if (bool)
    {
        if (password==msg[num].password)
        {
            document.write("登录成功<br/>");
            let img = document.createElement("img");
            img.width=60;
            img.height=60;
            img.style.borderRadius="50%";
            img.src=`${msg[num].avatar}`;
            document.body.appendChild(img);
            document.write("<br/>")
            document.write(`姓名:${msg[num].name}<br/>`);
            document.write(`年龄:${msg[num].age}<br/>`);
            document.write(`特长:${msg[num].strengths}`);
        }
        else  
        {
            warning();
        }
    }
    else 
    {
        warning();
    }
}
function log_in()
{
    let email=document.getElementById("e-mail").value;
    let password=document.getElementById("password").value;
    let str=".";
    let num=(email.split(str)).length-1;
    if (num!=1)
    {
        warning();
    }
    else 
    {
        let place=email.search(/\./);
        let length_email=email.length;
        let str='';
        let str1='';
        for (let i=place+1;i<length_email;i++)
        {
            str=str+email[i];
        }
        for (let i=place-4;i<place;i++)
        {
            str1=str1+email[i];
        }
        let bool=(/com/.test(str)||/cn/.test(str))&&(/@qq/.test(str1)||/@163/.test(str1));
        if (bool)
        {
            verify(email,password);
        }
        else 
        {
            warning();
        }
        
    }
}
