duem=function(w){
  c=w["slice"](-1);
  h=c["normalize"]("NFD")["split"]("");
(h[0]=="ᄅ")?(h[0]="ᄂ"):"";
  (h[0]=="ᄂ" && ["ᅣ", "ᅤ", "ᅧ", "ᅨ", "ᅭ", "ᅲ", "ᅵ"]["includes"](h[1]))?(h[0]="ᄋ"):"";
   ct = h["join"]("")["normalize"]("NFC");
    return c==ct?[c]:[c,ct];
}

response=function(r,m,s,i,re){
return re["reply"]((m["startsWith"]("!두음 "))?(duem(m["split"]("!두음 ")[1])):"")
}