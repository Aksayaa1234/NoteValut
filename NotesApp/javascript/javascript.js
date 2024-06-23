const but=document.querySelector(".but");
        const container=document.querySelector(".container");
        const note=document.querySelector(".note");
        const title=document.querySelector(".title");
        let list=[];
        if(localStorage.getItem("notes")!=null)
        {
            let data=JSON.parse(localStorage.getItem("notes"));
            for(let i=0;i<data.length;i++)
            {
                let ele=document.createElement("div");
                ele.setAttribute('class','abc');
                ele.innerHTML=`<h3>${data[i].title}</h3>${data[i].content}`;
                container.appendChild(ele);
                list.push(data[i]);
            }
        }
        but.addEventListener('click',()=>{
            let ele=document.createElement("div");
            ele.setAttribute('class','abc');
            ele.innerHTML=`<h3>${title.value}</h3>${note.value}`;
            container.appendChild(ele);
            list.push({"title":title.value,"content":note.value});
            let json=JSON.stringify(list);
            localStorage.setItem("notes",json);
        })