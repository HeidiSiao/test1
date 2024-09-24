(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();const f=document.getElementById("add"),h=document.getElementById("delete"),d=document.getElementById("memo"),i=document.getElementById("date"),u=document.getElementById("time"),a=document.getElementById("file");document.getElementsByClassName("status");const c=[];function m(){let l="";c.forEach(function(e){l+=`
    <table>
        <thead>
          <tr>
            <th class="table-title">Timestamp</th>
            <th class="table-title">Item</th>
            <th class="table-title">File Path</th>
            <th class="table-title">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${e.date} ${e.time}</td>
            <td>${e.memo}</td>
            <td>${e.file}</td>
            <td>${e.status}</td>
          </tr>
        </tbody>
      </table>
      <hr />
    `}),list.innerHTML=l}function y(){const l=document.querySelectorAll('input[name="status"]');let e=null;l.forEach(function(s){s.checked&&(e=s.value)});const o=document.getElementById("range");return e===null&&(e=o.value),e}f.addEventListener("click",function(){c.unshift({memo:d.value,date:i.value,time:u.value,file:a.value,status:y()}),d.value="",i.value="",u.value="",a.value="",document.querySelectorAll('input[name="status"]').forEach(function(e){e.checked=!1}),m()});h.addEventListener("click",function(){c.shift(),m()});
