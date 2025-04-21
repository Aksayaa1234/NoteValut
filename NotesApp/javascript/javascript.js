        const but=document.querySelector(".but");
        const container=document.querySelector(".container");
        const note=document.querySelector(".note");
        const title=document.querySelector(".title");
        const off=document.querySelector(".close");
        let list=[];
        if(localStorage.getItem("notes")!=null)
        {
            let data=JSON.parse(localStorage.getItem("notes"));
            for(let i=0;i<data.length;i++)
            {
                let date=document.createElement("div");
                let time=document.createElement("div");
                date.setAttribute('class','created');
                time.setAttribute('class','created');
                date.setAttribute('id','date');
                time.setAttribute('id','time');
                date.innerHTML=data[i].date;
                time.innerHTML=data[i].time;
                let out=document.createElement("div");
                let ele=document.createElement("div");
                ele.setAttribute('class','abc');
                ele.innerHTML=`<div><h3>${data[i].title}</h3>${data[i].content}</div><button class="close">X</button>`;
                // ele.children[1].addEventListener('click',()=>{
                //     for(let j=0;j<list.length;j++)
                //         {
                //             if(list[j]["title"]==ele.children[0].children[0].innerHTML)
                //                 {
                //                     list.splice(j,1);
                //                 }
                //         }
                //     out.remove();
                //     localStorage.setItem("notes",JSON.stringify(list));
                // })
                out.appendChild(ele);
                out.appendChild(date);
                out.appendChild(time);
                container.appendChild(out);
                list.push(data[i]);
            }
        }
        but.addEventListener('click',()=>{
            let d=new Date();
            let date=document.createElement("div");
            let time=document.createElement("div");
            date.setAttribute('class','created');
            time.setAttribute('class','created');
            date.setAttribute('id','date');
            time.setAttribute('id','time');
            date.innerHTML=`${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;
            time.innerHTML=`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
            let out=document.createElement("div");
            let ele=document.createElement("div");
            ele.setAttribute('class','abc');
            ele.innerHTML=`<div><h3>${title.value}</h3>${note.value}</div><button class="close">X</button>`;
            // ele.children[1].addEventListener('click',()=>{
            //     for(let j=0;j<list.length;j++)
            //         {
            //             if(list[j]["title"]==ele.children[0].children[0].innerHTML)
            //             {
            //                 list.splice(j,1);
            //             }
            //         }
            //     out.remove();
            //     localStorage.setItem("notes",JSON.stringify(list));
            // })
            out.appendChild(ele);
            out.appendChild(date);
            out.appendChild(time);
            container.appendChild(out);
            list.push({"title":title.value,"content":note.value,"date":date.innerHTML,"time":time.innerHTML});
            let json=JSON.stringify(list);
            localStorage.setItem("notes",json);
            
        })
        container.addEventListener("click",(ele)=>{
            if(ele.target.matches(".close"))
            {
                let sibling=ele.target.previousElementSibling;
                for(let j=0;j<list.length;j++)
                {
                    if(list[j]["title"]==sibling.children[0].innerHTML)
                    {
                        list.splice(j,1);
                        break;
                    }
                }
                ele.target.parentElement.parentElement.remove();
                localStorage.setItem("notes",JSON.stringify(list));
            }
        })

        