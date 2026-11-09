import json, sys
from fractions import Fraction as F
from math import gcd

def lcm(a,b): return a*b//gcd(a,b)

def P(s):
    """parse '5 1/6' / '3/4' / '6' -> (w,n,d)"""
    s=s.strip(); parts=s.split()
    if len(parts)==2:
        n,d=parts[1].split('/'); return int(parts[0]),int(n),int(d)
    if '/' in s:
        n,d=s.split('/'); return 0,int(n),int(d)
    return int(s),0,1

def val(s):
    w,n,d=P(s); return w+F(n,d)

def mx(fr):
    fr=F(fr)
    if fr.denominator==1: return str(fr.numerator)
    w=fr.numerator//fr.denominator; r=fr-w
    return f"{r.numerator}/{r.denominator}" if w==0 else f"{w} {r.numerator}/{r.denominator}"

def show(w,n,d):
    if n==0: return str(w)
    return f"{n}/{d}" if w==0 else f"{w} {n}/{d}"

def mults(d,L):
    return ", ".join(str(d*i) for i in range(1, L//d+1))

class Steps:
    def __init__(s): s.items=[]
    def add(s,label,content): s.items.append({"label":label,"content":content})
    def out(s): return [{"label":f"Step {i+1}: {x['label']}","content":x['content']} for i,x in enumerate(s.items)]

def common(st,a,b):
    """rename a,b to common denominator; returns (w1,x,w2,y,L)"""
    w1,n1,d1=P(a); w2,n2,d2=P(b)
    if n1==0: d1=d2
    if n2==0: d2=d1
    L=lcm(d1,d2)
    if d1!=d2:
        st.add("Find a common denominator",
               f"The denominators (bottoms) are {d1} and {d2}. Count by {max(d1,d2)}s until you hit a number {min(d1,d2)} also goes into: {mults(max(d1,d2),L)}. The smallest one is {L}.")
        parts=[]
        for (w,n,d) in ((w1,n1,d1),(w2,n2,d2)):
            if n==0: continue
            k=L//d
            if k==1: parts.append(f"{n}/{d} already has {L} on the bottom.")
            else: parts.append(f"{n}/{d} = {n*k}/{L} (multiply top AND bottom by {k})")
        st.add("Rename the fractions", " ".join(p if p.endswith(".") else p+"." for p in parts))
    x=n1*(L//d1) if n1 else 0
    y=n2*(L//d2) if n2 else 0
    return w1,x,w2,y,L

def simplify_step(st,W,r,L):
    """r/L leftover with whole W; adds simplify step if needed, returns final string"""
    if r==0: return str(W)
    g=gcd(r,L)
    if g>1:
        st.add("Simplify", f"{r}/{L} is not in simplest form. {r} and {L} can both be divided by {g}: {r}÷{g} = {r//g} and {L}÷{g} = {L//g}. So {r}/{L} = {r//g}/{L//g}.")
        r,L=r//g,L//g
    return show(W,r,L)

def add_steps(a,b,st=None):
    st=st or Steps()
    w1,x,w2,y,L=common(st,a,b)
    W=w1+w2
    if w1 and w2:
        st.add("Add the whole numbers", f"{w1} + {w2} = {W}. Say it out loud to double-check: {w1} plus {w2} is {W}.")
    s=x+y
    st.add("Add the fractions", f"{x}/{L} + {y}/{L} = {s}/{L}. Only the tops add. The bottom stays {L}.")
    if s>=L:
        r=s-L; W+=1
        st.add("Carry the extra whole", f"{s}/{L} is more than 1 whole, because {L}/{L} = 1. So {s}/{L} = 1 and {r}/{L} left over. Add that 1 to the whole number: {W-1} + 1 = {W}.")
    else:
        r=s
    res=simplify_step(st,W,r,L)
    assert val(res)==val(a)+val(b), (a,b,res)
    return st,res

def sub_steps(a,b,st=None):
    st=st or Steps()
    w1,x,w2,y,L=common(st,a,b)
    if x<y:
        if x==0:
            st.add("Regroup: break a whole into pieces", f"{w1} has no fraction part, so borrow 1 whole and turn it into {L}/{L}. {w1} becomes {show(w1-1,L,L) if w1-1 else f'{L}/{L}'}.")
        else:
            st.add("Regroup (borrow 1 whole)", f"{x}/{L} is smaller than {y}/{L}, so you can't take {y} away from {x}. Borrow 1 whole from the {w1}. One whole = {L}/{L}. Then {x}/{L} + {L}/{L} = {x+L}/{L}. So {show(w1,x,L)} becomes {show(w1-1,x+L,L)}.")
        w1-=1; x+=L
    if w1 or w2:
        st.add("Subtract the whole numbers", f"{w1} − {w2} = {w1-w2}.")
    st.add("Subtract the fractions", f"{x}/{L} − {y}/{L} = {x-y}/{L}.")
    res=simplify_step(st,w1-w2,x-y,L)
    assert val(res)==val(a)-val(b), (a,b,res)
    return st,res

def improper_detail(a,b,op):
    """detailed explanation using improper fractions — targets the 'multiply then ADD the top' slip"""
    w1,n1,d1=P(a); w2,n2,d2=P(b)
    if n1==0: d1=d2
    if n2==0: d2=d1
    L=lcm(d1,d2)
    st=Steps()
    st.add("Another way: use improper fractions", "You can also turn both mixed numbers into improper fractions (top bigger than bottom), then add or subtract.")
    tops=[]
    for (w,n,d) in ((w1,n1,d1),(w2,n2,d2)):
        k=L//d; nn=n*k
        if w==0:
            tops.append(nn); continue
        st.add(f"Change {show(w,n,d)}", (f"First rename: {show(w,n,d)} = {show(w,nn,L)}. " if k>1 and n else "")+
               f"Multiply the whole by the bottom: {w} × {L} = {w*L}. Then ADD the top: {w*L} + {nn} = {w*L+nn}. So it is {w*L+nn}/{L}. (Don't skip adding the top!)")
        tops.append(w*L+nn)
    r = tops[0]+tops[1] if op=='+' else tops[0]-tops[1]
    st.add("Combine", f"{tops[0]}/{L} {op if op=='+' else '−'} {tops[1]}/{L} = {r}/{L}.")
    fr=F(r,L)
    if r>=L:
        q,rem=divmod(r,L)
        st.add("Change back to a mixed number", f"How many {L}s fit in {r}? {r} ÷ {L} = {q} with {rem} left over. So {r}/{L} = {show(q,rem,L)}"+ (f", which simplifies to {mx(fr)}." if gcd(rem,L)>1 and rem else "."))
    elif gcd(r,L)>1:
        st.add("Simplify", f"{r}/{L} = {mx(fr)}.")
    return st.out()

Q=[]
def q(id, sec, text, ans, atype="mixed-number", diff="medium", tags=(), expl=None, detail=None, choices=None):
    d={"id":id,"sectionId":sec,"gradeLevel":"5","questionText":text,"correctAnswer":ans,"answerType":atype,
       "difficulty":diff,"tags":["fractions","grade5","chapter2",*tags],"explanation":expl}
    if choices: d["choices"]=[{"label":l,"value":v} for v,l in choices]
    if detail: d["detailedExplanation"]=detail
    Q.append(d)

def mc(id,sec,text,opts,correct_letter,expl,diff="medium",tags=(),detail=None):
    q(id,sec,text,correct_letter,"multiple-choice",diff,tags,expl,detail,choices=list(zip("ABCD",opts)))

def final(st,txt): st.add("Answer", txt); return st.out()

# ---------------- Activity 1 ----------------
S="chp2g5-division-simplest"; n=0
def nid():
    global n; n+=1; return f"chp2g5-1-{n}"
for frac,opts,cl in (("3/5",["5 ÷ 3","3 ÷ 5","3 × 5","5 − 3"],"B"),("6/11",["6 × 11","11 − 6","11 ÷ 6","6 ÷ 11"],"D"),("9/4",["9 ÷ 4","4 ÷ 9","9 − 4","9 × 4"],"A")):
    t,b=frac.split('/')
    mc(nid(),S,f"Which expression is equal to {frac}?",opts,cl,[
        {"label":"Step 1: A fraction bar means divide","content":f"The line in a fraction means \"divided by\". The top is divided by the bottom."},
        {"label":"Step 2: Read it top to bottom","content":f"{frac} means {t} ÷ {b}. Picture {t} pizzas shared by {b} people."},
        {"label":"Answer","content":f"{t} ÷ {b} is choice {cl}. Watch out: {b} ÷ {t} is the flip, and that is a different number!"}],"easy",("fraction-as-division",))
for things,people,item in ((3,4,"pizzas"),(12,5,"cookies"),(7,3,"sandwiches")):
    fr=F(things,people)
    q(nid(),S,f"{people} friends share {things} {item} equally. How many {item} does each friend get?",mx(fr),diff="easy" if things<people else "medium",tags=("fraction-as-division",),expl=[
        {"label":"Step 1: Sharing means dividing","content":f"{things} {item} shared by {people} friends is {things} ÷ {people}."},
        {"label":"Step 2: Write it as a fraction","content":f"{things} ÷ {people} = {things}/{people}."},
        *([{"label":"Step 3: Change to a mixed number","content":f"How many {people}s fit in {things}? {things//people}, with {things%people} left over. So {things}/{people} = {mx(fr)}."}] if things>=people else []),
        {"label":"Answer","content":f"Each friend gets {mx(fr)} {item}."}])
for imp in ("27/4","41/6","38/12","23/6"):
    t,b=map(int,imp.split('/')); fr=F(t,b); qq,rr=divmod(t,b)
    ex=[{"label":"Step 1: Divide the top by the bottom","content":f"How many {b}s fit in {t}? {b} × {qq} = {b*qq}, and {t} − {b*qq} = {rr} left over."},
        {"label":"Step 2: Write the mixed number","content":f"{qq} wholes and {rr}/{b} left: {show(qq,rr,b)}."}]
    if gcd(rr,b)>1: ex.append({"label":"Step 3: Simplify","content":f"{rr}/{b}: divide top and bottom by {gcd(rr,b)} to get {mx(F(rr,b))}. So the answer is {mx(fr)}."})
    ex.append({"label":"Answer","content":mx(fr)})
    q(nid(),S,f"Write {imp} as a mixed number in simplest form.",mx(fr),diff="easy" if gcd(rr,b)==1 else "medium",tags=("improper-to-mixed",),expl=ex)
for m in ("4 3/8","5 4/12","7 2/5","3 5/6"):
    w,nn,d=P(m); top=w*d+nn
    extra=" Careful: 5 × 12 = 60 is only the wholes. You still have to add the 4 twelfths!" if m=="5 4/12" else ""
    q(nid(),S,f"Write {m} as an improper fraction (do not simplify).",f"{top}/{d}","fraction",diff="medium" if m=="5 4/12" else "easy",tags=("mixed-to-improper",),expl=[
        {"label":"Step 1: Multiply the whole by the bottom","content":f"{w} × {d} = {w*d}. That's how many {d}ths are in {w} wholes."},
        {"label":"Step 2: ADD the top","content":f"{w*d} + {nn} = {top}.{extra}"},
        {"label":"Step 3: Keep the same bottom","content":f"The denominator stays {d}."},
        {"label":"Answer","content":f"{m} = {top}/{d}"}])
for un in ("16/30","14/30","26/30","18/24"):
    t,b=map(int,un.split('/')); g=gcd(t,b)
    q(nid(),S,f"Write {un} in simplest form.",mx(F(t,b)),diff="easy",tags=("simplest-form",),expl=[
        {"label":"Step 1: Find a number that divides both","content":f"{t} and {b} are both even, so try 2. Keep going until nothing else divides both. The biggest number that divides both is {g}."},
        {"label":"Step 2: Divide top and bottom","content":f"{t} ÷ {g} = {t//g} and {b} ÷ {g} = {b//g}."},
        {"label":"Answer","content":f"{un} = {mx(F(t,b))}. On a test, always do this last step. An answer like {un} can be marked wrong!"}])
for m in ("3 51/40","5 31/24","2 35/24","4 18/12"):
    w,nn,d=P(m); fr=val(m); r=nn-d
    ex=[{"label":"Step 1: Spot the problem","content":f"In {m}, the fraction {nn}/{d} is bigger than 1, because {nn} is more than {d}. Simplest form needs a fraction smaller than 1."},
        {"label":"Step 2: Pull out a whole","content":f"{d}/{d} = 1 whole. {nn}/{d} = 1 and {r}/{d}. So {m} = {w} + 1 + {r}/{d} = {show(w+1,r,d)}."}]
    if gcd(r,d)>1: ex.append({"label":"Step 3: Simplify the fraction","content":f"{r}/{d} = {mx(F(r,d))}."})
    ex.append({"label":"Answer","content":mx(fr)})
    q(nid(),S,f"Write {m} in simplest form.",mx(fr),diff="medium",tags=("simplest-form","regroup"),expl=ex)

# ---------------- Activity 2 ----------------
S="chp2g5-adding"; n=0
def nid2():
    global n; n+=1; return f"chp2g5-2-{n}"
for a,b,dif in (("5/8","2/3","easy"),("7/10","3/4","easy"),("3/4","5/6","easy"),("2/5","3/4","easy"),("5/6","7/10","medium"),
                ("2 1/3","1 1/4","easy"),("4 5/8","3 2/3","medium"),("5 3/4","2 5/6","medium"),("3 5/6","2 7/8","medium"),
                ("1 7/8","2 2/5","medium"),("6 3/10","2 4/5","hard"),("2 5/6","3 3/8","hard")):
    st,res=add_steps(a,b)
    det=improper_detail(a,b,'+') if ' ' in a else None
    q(nid2(),S,f"What is {a} + {b}? Give your answer in simplest form.",res,diff=dif,tags=("adding",),expl=final(st,res),detail=det)

# ---------------- Activity 3 ----------------
S="chp2g5-subtracting"; n=0
def nid3():
    global n; n+=1; return f"chp2g5-3-{n}"
for a,b,dif in (("3/4","2/9","easy"),("5/6","3/10","easy"),("5 1/6","2 3/4","medium"),("7 2/5","3 5/6","medium"),
                ("8 1/3","3 7/12","medium"),("5 3/10","3 5/6","medium"),("6 1/4","2 2/3","medium"),("9","3 3/4","medium"),
                ("6","4 11/40","hard"),("8","6 17/24","hard"),("4 1/5","1 1/2","medium"),("10 1/8","4 5/6","hard")):
    st,res=sub_steps(a,b)
    det=improper_detail(a,b,'-') if (' ' in a or ' ' in b) and P(a)[1]!=0 else None
    q(nid3(),S,f"What is {a} − {b}? Give your answer in simplest form.",res,diff=dif,tags=("subtracting","regroup"),expl=final(st,res),detail=det)

# ---------------- word problem helpers ----------------
def chain(plan, ops, start, unit, closing=None):
    """ops: list of ('+'|'-', value). returns steps,result"""
    st=Steps(); st.add("Make a plan", plan)
    cur=start
    for op,v in ops:
        before=len(st.items)
        sub=Steps()
        sub_st,res=(add_steps if op=='+' else sub_steps)(cur,v,sub)
        st.add(f"Work out {cur} {'+' if op=='+' else '−'} {v}", " ".join(f"{x['label']}: {x['content']}" for x in sub_st.items))
        cur=res
    st.add("Answer", closing or f"{cur} {unit}.")
    return st.out(), cur

S="chp2g5-word-problems"; n=0
def nid4():
    global n; n+=1; return f"chp2g5-4-{n}"
words=[
 ("Raj eats 1/6 of a pizza. His sister eats 3/8 of the same pizza. What fraction of the pizza is left?",
  "First add what they ate. Then subtract that from the whole pizza, which is 1. The question asks what is LEFT, not what was eaten.",
  [('+',"3/8"),('-',None)],"1/6","of the pizza","easy"),
 ("Leo's water bottle has 5/6 liter of water. He drinks 2/5 liter. How much water is left?",
  "\"Left\" means subtract: 5/6 − 2/5.",[('-',"2/5")],"5/6","liter","easy"),
 ("A ribbon is 10 meters long. Maya cuts off 2 3/4 meters, then 3 5/6 meters. How much ribbon is left?",
  "Add the two pieces she cut off. Then subtract that total from 10.",[('+',"3 5/6"),('-',None)],"2 3/4","meters","medium"),
 ("A bag has 7 1/2 pounds of soil. Dad uses 2 2/3 pounds, then buys 1 3/4 more pounds. How much soil is in the bag now?",
  "Subtract what he used, then add what he bought. Do it in order.",[('-',"2 2/3"),('+',"1 3/4")],"7 1/2","pounds","medium"),
 ("A jug holds 4 1/4 liters of juice. Ana pours 1 5/6 liters, then 1 2/3 liters. How much juice is left in the jug?",
  "Add the two pours. Then subtract that from 4 1/4.",[('+',"1 2/3"),('-',None)],"1 5/6","liter","hard"),
 ("Zoe swims 1 3/4 km on Monday and 2 1/3 km on Tuesday. Her goal for the week is 6 km. How many more km does she need?",
  "Add what she already swam. Then subtract from the goal: goal − done = still needed.",[('+',"2 1/3"),('-',None)],"1 3/4","km","medium"),
 ("A 9 km trail has three sections. The first is 2 2/3 km and the second is 3 3/4 km. How long is the third section?",
  "Add the two sections you know. The third section is whatever is left of the 9 km.",[('+',"3 3/4"),('-',None)],"2 2/3","km","medium"),
]
TOTALS={2:"10",4:"4 1/4",5:"6",6:"9",0:"1"}
for idx,(text,plan,ops,start,unit,dif) in enumerate(words):
    if ops[-1][1] is None:
        # add then subtract from total
        st=Steps(); st.add("Make a plan",plan)
        s1,partial=add_steps(start,ops[0][1],Steps())
        st.add(f"Add {start} + {ops[0][1]}", " ".join(f"{x['label']}: {x['content']}" for x in s1.items))
        total=TOTALS[idx]
        s2,res=sub_steps(total,partial,Steps())
        st.add(f"Subtract {total} − {partial}", " ".join(f"{x['label']}: {x['content']}" for x in s2.items))
        st.add("Answer", f"{res} {unit}.")
        ex=st.out()
    else:
        ex,res=chain(plan,ops,start,unit)
    q(nid4(),S,text,res,diff=dif,tags=("word-problem","multi-step"),expl=ex)

# yes/no "enough?" problems
def enough_q(text,have_expr_steps,left,need,unit,letter_opts):
    pass
# flour: 5 - 1 2/3 - 2 1/4 vs 1 1/2
s1,used=add_steps("1 2/3","2 1/4"); s2,left=sub_steps("5",used)
diff=val("1 1/2")-val(left)
assert left=="1 1/12" and diff==F(5,12)
mc(nid4(),S,"Priya has 5 cups of flour. She uses 1 2/3 cups for bread and 2 1/4 cups for a cake. She needs 1 1/2 cups for pancakes. Does she have enough?",
   ["Yes, with 5/12 cup extra","No, she is 5/12 cup short","Yes, with 1 1/12 cups extra","No, she is 1 1/12 cups short"],"B",[
   {"label":"Step 1: Make a plan","content":"Find how much flour is left after bread and cake. Then compare it to the 1 1/2 cups she needs."},
   {"label":"Step 2: Flour used","content":f"1 2/3 + 2 1/4 = 1 8/12 + 2 3/12 = 3 11/12 cups."},
   {"label":"Step 3: Flour left","content":"5 − 3 11/12. Regroup 5 as 4 12/12. 4 12/12 − 3 11/12 = 1 1/12 cups."},
   {"label":"Step 4: Compare","content":"She needs 1 1/2 = 1 6/12 cups but has 1 1/12. 1 6/12 − 1 1/12 = 5/12."},
   {"label":"Answer","content":"No. She is 5/12 cup short. That's choice B."}],"hard",("word-problem","enough"))
s1,left=sub_steps("3 1/2","1 5/8"); s2,now=add_steps(left,"2 3/4")
assert now=="4 5/8" and val(now)-val("4 1/2")==F(1,8)
mc(nid4(),S,"A can has 3 1/2 gallons of paint. Sam uses 1 5/8 gallons, then buys 2 3/4 more gallons. He needs 4 1/2 gallons to paint the fence. Does he have enough?",
   ["No, he is 1/8 gallon short","Yes, with 4 5/8 gallons extra","Yes, with 1/8 gallon extra","No, he is 1/4 gallon short"],"C",[
   {"label":"Step 1: Make a plan","content":"Find how much paint he has now (subtract what he used, add what he bought). Then compare to 4 1/2."},
   {"label":"Step 2: After using","content":"3 1/2 − 1 5/8 = 3 4/8 − 1 5/8. 4/8 is smaller than 5/8, so regroup: 2 12/8 − 1 5/8 = 1 7/8 gallons."},
   {"label":"Step 3: After buying","content":"1 7/8 + 2 3/4 = 1 7/8 + 2 6/8 = 3 13/8 = 4 5/8 gallons."},
   {"label":"Step 4: Compare","content":"He needs 4 1/2 = 4 4/8. He has 4 5/8. 4 5/8 − 4 4/8 = 1/8."},
   {"label":"Answer","content":"Yes, with 1/8 gallon extra. That's choice C."}],"hard",("word-problem","enough"))

# ---------------- Activity 5: benchmarks ----------------
S="chp2g5-benchmarks"; n=0
def nid5():
    global n; n+=1; return f"chp2g5-5-{n}"
for fr in ("5/8","7/12","9/10","1/9","3/7"):
    v=F(fr); dist={"0":abs(v),"1/2":abs(v-F(1,2)),"1":abs(v-1)}; best=min(dist,key=dist.get)
    letter={"0":"A","1/2":"B","1":"C"}[best]
    t,b=fr.split('/')
    q(nid5(),S,f"Is {fr} closest to 0, 1/2, or 1?",letter,"multiple-choice","easy",("benchmarks",),[
        {"label":"Step 1: Find half of the bottom","content":f"Half of {b} is {mx(F(int(b),2))}. A fraction is about 1/2 when the top is about half the bottom."},
        {"label":"Step 2: Compare the top","content":f"The top is {t}. Close to 0 means the top is tiny. Close to 1 means the top is almost the bottom."},
        {"label":"Answer","content":f"{fr} is closest to {best}. Choice {letter}."}],choices=[("A","0"),("B","1/2"),("C","1")])
mc(nid5(),S,"Sofia adds 5/8 cup of raisins and 7/12 cup of nuts. She says the total is less than 1 cup. Use benchmarks: is she right?",
   ["Yes, both are less than 1/2","No, both are more than 1/2, so the total is more than 1","Yes, 5/8 + 7/12 = 12/20","Can't tell without the exact answer"],"B",[
   {"label":"Step 1: Compare each to 1/2","content":"Half of 8 is 4, and 5 is more than 4, so 5/8 > 1/2. Half of 12 is 6, and 7 is more than 6, so 7/12 > 1/2."},
   {"label":"Step 2: Think","content":"More than 1/2 plus more than 1/2 is more than 1 whole."},
   {"label":"Answer","content":"No. Choice B. (Exact: 15/24 + 14/24 = 29/24 = 1 5/24 cups.) Never add tops and bottoms like 12/20!"}],"medium",("benchmarks","reasonable"))
mc(nid5(),S,"Is 3/7 + 2/5 less than 1? Use benchmarks.",["Yes, both are less than 1/2","No, both are more than 1/2","No, 3 + 2 = 5 is more than 1","Yes, because 7 and 5 are big"],"A",[
   {"label":"Step 1: Compare each to 1/2","content":"Half of 7 is 3 1/2, and 3 is less, so 3/7 < 1/2. Half of 5 is 2 1/2, and 2 is less, so 2/5 < 1/2."},
   {"label":"Answer","content":"Less than 1/2 plus less than 1/2 is less than 1. Choice A. (Exact: 15/35 + 14/35 = 29/35.)"}],"medium",("benchmarks",))
for expr,ans,how in (("3 7/8 + 2 1/10","6","3 7/8 is about 4 and 2 1/10 is about 2. 4 + 2 = 6."),
                     ("8 1/3 − 3 7/12","4","8 1/3 is about 8 and 3 7/12 is about 4. 8 − 4 = 4. So the exact answer should be near 4. (Exact: 4 3/4.)"),
                     ("11 1/3 − 3 5/8 + 2 3/4","10","11 1/3 is about 11, 3 5/8 is about 4, 2 3/4 is about 3. 11 − 4 + 3 = 10.")):
    q(nid5(),S,f"Round each mixed number to the nearest whole number. What is your estimate for {expr}?",ans,"integer","easy",("estimate",),[
        {"label":"Step 1: Round each number","content":"If the fraction part is 1/2 or more, round up. If it's less than 1/2, round down."},
        {"label":"Step 2: Do the easy math","content":how},
        {"label":"Answer","content":f"About {ans}. Use this to check an exact answer: if they are far apart, look for a mistake."}])
mc(nid5(),S,"Jay works out 5 1/6 − 2 3/4 and gets 2 7/12. Estimate: 5 − 3 = 2. Which exact answer is right?",
   ["2 7/12","2 5/12","3 5/12","3 7/12"],"B",[
   {"label":"Step 1: Rename","content":"5 1/6 = 5 2/12 and 2 3/4 = 2 9/12."},
   {"label":"Step 2: Regroup","content":"2/12 is less than 9/12, so borrow: 5 2/12 = 4 14/12."},
   {"label":"Step 3: Subtract","content":"4 14/12 − 2 9/12 = 2 5/12."},
   {"label":"Answer","content":"2 5/12, choice B. Both 2 5/12 and 2 7/12 fit the estimate, so the estimate catches big mistakes but you still need careful work."}],"medium",("estimate","regroup"))

# ---------------- Test A redo ----------------
S="chp2g5-test-a"; n=0
def nida():
    global n; n+=1; return f"chp2g5-a-{n}"
def mc_calc(idf,text,expr_a,op,expr_b,opts,letter,dif="medium"):
    st,res=(add_steps if op=='+' else sub_steps)(expr_a,expr_b)
    correct=dict(zip("ABCD",opts))[letter]
    assert val(correct)==val(res), (text,res,correct)
    mc(idf(),S,text,opts,letter,final(st,f"{res}. That's choice {letter}."),dif,("test-redo",))
mc_calc(nida,"What is the value of 5/8 + 2/3?","5/8",'+',"2/3",["7/11","7/24","1 7/24","1 1/3"],"C","easy")
mc(nida(),S,"Which expression is equal to 4/7?",["7 ÷ 4","4 ÷ 7","4 × 7","7 − 4"],"B",[
  {"label":"Step 1","content":"A fraction bar means divide: top ÷ bottom."},{"label":"Answer","content":"4/7 = 4 ÷ 7, choice B."}],"easy",("test-redo",))
mc_calc(nida,"What is the difference between 5 1/6 and 2 3/4?","5 1/6",'-',"2 3/4",["3 5/12","2 7/12","3 7/12","2 5/12"],"D")
mc(nida(),S,"A pie is cut into equal parts. Ava gives away 1/4 of the pie and then 2/5 of the original pie. What fraction remains?",["7/20","13/20","3/9","3/20"],"A",[
  {"label":"Step 1: Given away","content":"1/4 + 2/5 = 5/20 + 8/20 = 13/20."},
  {"label":"Step 2: Remains","content":"The whole pie is 20/20. 20/20 − 13/20 = 7/20."},
  {"label":"Answer","content":"7/20, choice A. 13/20 is a trap: that's what was given away."}],"medium",("test-redo",))
mc(nida(),S,"Which mixed number is equal to 23/6?",["4 1/6","3 2/6","3 5/6","2 5/6"],"C",[
  {"label":"Step 1","content":"6 × 3 = 18, and 23 − 18 = 5 left over."},{"label":"Answer","content":"3 5/6, choice C."}],"easy",("test-redo",))
def wp(idf,text,plan,a,op,b,unit,dif="medium",then=None):
    st=Steps(); st.add("Make a plan",plan)
    s1,res=(add_steps if op=='+' else sub_steps)(a,b,Steps())
    st.add(f"Work out {a} {'+' if op=='+' else '−'} {b}"," ".join(f"{x['label']}: {x['content']}" for x in s1.items))
    if then:
        op2,c=then
        prev=res
        s2,res=(add_steps if op2=='+' else sub_steps)(*( (c,prev) if op2=='-' else (prev,c)),Steps())
        st.add(f"Work out {c} − {prev}" if op2=='-' else f"Work out {prev} + {c}"," ".join(f"{x['label']}: {x['content']}" for x in s2.items))
    st.add("Answer",f"{res} {unit}.")
    q(idf(),S,text,res,diff=dif,tags=("test-redo","word-problem"),expl=st.out())
    return res
wp(nida,"Mia needs 3/4 cup of milk. She has already poured 2/9 cup. How much more milk does she need?","Still needed = needed − already poured.","3/4",'-',"2/9","cup","easy")
wp(nida,"A cyclist rides 4 5/8 miles in the morning and 3 2/3 miles in the afternoon. How many miles does the cyclist ride in all?","\"In all\" means add.","4 5/8",'+',"3 2/3","miles")
wp(nida,"A bag contains 8 1/3 pounds of rice. A cook uses 3 7/12 pounds. How many pounds of rice remain?","\"Remain\" means subtract.","8 1/3",'-',"3 7/12","pounds")
wp(nida,"Eli reads for 5/6 hour on Saturday and 7/10 hour on Sunday. How much time does he spend reading altogether?","\"Altogether\" means add.","5/6",'+',"7/10","hours")
wp(nida,"One board is 5 3/10 feet long. Another is 3 5/6 feet long. How much longer is the first board?","\"How much longer\" means subtract the shorter from the longer.","5 3/10",'-',"3 5/6","feet")
wp(nida,"A hiking route is 6 miles long. A group hikes 1 7/8 miles before lunch and 2 2/5 miles after lunch. How much farther must the group hike to finish?","Add what they hiked, then subtract that from 6.","1 7/8",'+',"2 2/5","miles","hard",then=('-',"6"))
wp(nida,"A school collects 3 5/6 pounds of cans on Monday and 2 7/8 pounds on Tuesday. The goal is 8 pounds. How many more pounds are needed?","Add what was collected, then subtract that from the goal of 8.","3 5/6",'+',"2 7/8","pounds","hard",then=('-',"8"))
st,res=add_steps("5/8","7/12"); q(nida(),S,"Sofia adds 5/8 cup of raisins and 7/12 cup of nuts to a snack mix. What is the exact total?",res,diff="medium",tags=("test-redo",),expl=final(st,f"{res} cups."))
mc(nida(),S,"Sofia says 5/8 cup + 7/12 cup is less than 1 cup. Is her claim reasonable?",["Yes, both are less than 1/2","No, both are more than 1/2, so the total is more than 1 cup","Yes, the total is 12/20","No, the total is exactly 1"],"B",[
  {"label":"Step 1: Benchmarks","content":"5/8 > 1/2 because 5 > 4 (half of 8). 7/12 > 1/2 because 7 > 6 (half of 12)."},
  {"label":"Step 2: Check exactly","content":"5/8 + 7/12 = 15/24 + 14/24 = 29/24 = 1 5/24 cups."},
  {"label":"Answer","content":"Not reasonable. Choice B."}],"medium",("test-redo","benchmarks"))

# ---------------- Test B redo ----------------
S="chp2g5-test-b"; n=0
def nidb():
    global n; n+=1; return f"chp2g5-b-{n}"
mc_calc(nidb,"What is the value of 7/10 + 3/4?","7/10",'+',"3/4",["10/14","10/40","1 9/20","1 1/20"],"C","easy")
mc(nidb(),S,"Which expression is equal to 5/9?",["9 ÷ 5","5 ÷ 9","5 × 9","9 − 5"],"B",[
  {"label":"Step 1","content":"A fraction bar means divide: top ÷ bottom."},{"label":"Answer","content":"5/9 = 5 ÷ 9, choice B."}],"easy",("test-redo",))
mc_calc(nidb,"What is the difference between 7 2/5 and 3 5/6?","7 2/5",'-',"3 5/6",["4 13/30","3 13/30","4 17/30","3 17/30"],"D")
mc(nidb(),S,"A pie is cut into equal parts. Ava gives away 1/3 of the pie and then 3/8 of the original pie. What fraction remains?",["7/24","17/24","2/11","5/24"],"A",[
  {"label":"Step 1: Given away","content":"1/3 + 3/8 = 8/24 + 9/24 = 17/24."},
  {"label":"Step 2: Remains","content":"The whole pie = 24/24. 24/24 − 17/24 = 7/24."},
  {"label":"Answer","content":"7/24, choice A. 17/24 is what was GIVEN AWAY. Read the question again: it asks what REMAINS."}],"medium",("test-redo",))
mc(nidb(),S,"Which mixed number is equal to 29/8?",["4 1/8","3 3/8","3 5/8","2 5/8"],"C",[
  {"label":"Step 1","content":"8 × 3 = 24, and 29 − 24 = 5 left over."},{"label":"Answer","content":"3 5/8, choice C."}],"easy",("test-redo",))
mc_calc(nidb,"What is the value of 5/6 − 3/10?","5/6",'-',"3/10",["2/4","8/15","2/15","17/30"],"B")
mc_calc(nidb,"What is the value of 5 3/4 + 2 5/6?","5 3/4",'+',"2 5/6",["7 8/10","8 5/12","7 7/12","8 7/12"],"D")
# B8
s1,used=add_steps("3 3/4","2 5/6",Steps()); s2,left=sub_steps("9",used,Steps())
assert left=="2 5/12"
q(nidb(),S,"A baker has 9 cups of flour. She uses 3 3/4 cups for bread and 2 5/6 cups for muffins. How much flour is left?",left,diff="hard",tags=("test-redo","word-problem"),expl=[
  {"label":"Step 1: Make a plan","content":"Add what she used, then subtract from 9."},
  {"label":"Step 2: Flour used","content":" ".join(f"{x['label']}: {x['content']}" for x in s1.items)},
  {"label":"Step 3: Flour left","content":" ".join(f"{x['label']}: {x['content']}" for x in s2.items)},
  {"label":"Answer","content":f"{left} cups."}])
mc(nidb(),S,"The baker has 2 5/12 cups of flour left. She needs 2 2/3 cups for cookies. Does she have enough?",["Yes, with 1/4 cup extra","No, she needs 1/4 cup more","No, she needs 5/12 cup more","Yes, exactly enough"],"B",[
  {"label":"Step 1: Same denominator","content":"2 2/3 = 2 8/12."},
  {"label":"Step 2: Compare","content":"She has 2 5/12 and needs 2 8/12. 8/12 − 5/12 = 3/12 = 1/4."},
  {"label":"Answer","content":"No, she needs 1/4 cup more. Choice B."}],"medium",("test-redo","enough"))
# B9
s1,done=add_steps("2 5/6","3 3/8",Steps()); s2,rem=sub_steps("8",done,Steps())
assert rem=="1 19/24" and val(rem)-val("1 2/3")==F(1,8)
q(nidb(),S,"An 8-mile hiking route has three sections. A group hikes 2 5/6 miles in the first section and 3 3/8 miles in the second. How far do they still have to hike?",rem,diff="hard",tags=("test-redo","word-problem"),expl=[
  {"label":"Step 1: Make a plan","content":"Add the two sections they hiked, then subtract that from the whole 8 miles. (Don't subtract the water amount yet. That's the next question.)"},
  {"label":"Step 2: Miles hiked","content":" ".join(f"{x['label']}: {x['content']}" for x in s1.items)},
  {"label":"Step 3: Miles left","content":" ".join(f"{x['label']}: {x['content']}" for x in s2.items)},
  {"label":"Answer","content":f"{rem} miles."}])
mc(nidb(),S,"They still have 1 19/24 miles to go. Their water will last for 1 2/3 more miles. Can they finish before running out of water?",["Yes, with 1/8 mile of water to spare","No, they run out 1/8 mile before the end","Yes, with 4 1/8 miles to spare","No, they run out 3/8 mile early"],"B",[
  {"label":"Step 1: Same denominator","content":"1 2/3 = 1 16/24."},
  {"label":"Step 2: Compare","content":"Distance left is 1 19/24. Water covers 1 16/24. 19/24 − 16/24 = 3/24 = 1/8. The distance is longer than the water lasts."},
  {"label":"Answer","content":"No. They run out 1/8 mile before the end. Choice B."}],"hard",("test-redo","enough"))
# B10
q(nidb(),S,"A tank holds 11 1/3 gallons of water. A gardener uses 3 5/8 gallons, then adds 2 3/4 gallons. Round each number to the nearest whole. About how many gallons are in the tank?","10","integer","easy",("test-redo","estimate"),[
  {"label":"Step 1: Round","content":"11 1/3 → 11. 3 5/8 → 4. 2 3/4 → 3."},{"label":"Step 2: Estimate","content":"11 − 4 + 3 = 10."},{"label":"Answer","content":"About 10 gallons."}])
s1,a1=sub_steps("11 1/3","3 5/8",Steps()); s2,a2=add_steps(a1,"2 3/4",Steps())
assert a2=="10 11/24"
q(nidb(),S,"A tank holds 11 1/3 gallons of water. A gardener uses 3 5/8 gallons, then adds 2 3/4 gallons. Exactly how many gallons are in the tank now?",a2,diff="hard",tags=("test-redo","word-problem"),expl=[
  {"label":"Step 1: After using","content":" ".join(f"{x['label']}: {x['content']}" for x in s1.items)+" Keep the whole number 7! Don't drop it."},
  {"label":"Step 2: After adding","content":" ".join(f"{x['label']}: {x['content']}" for x in s2.items)},
  {"label":"Answer","content":f"{a2} gallons."}])
mc(nidb(),S,"The tank has 10 11/24 gallons. The gardener needs 10 1/2 gallons tomorrow. She says, \"I have about 10 gallons, so I definitely have enough.\" Is she right?",["Yes, she has 11/24 gallon extra","No, she is 1/24 gallon short","Yes, 10 is close enough","No, she is 1/2 gallon short"],"B",[
  {"label":"Step 1: Same denominator","content":"10 1/2 = 10 12/24."},
  {"label":"Step 2: Compare","content":"She has 10 11/24 and needs 10 12/24. She is 1/24 short."},
  {"label":"Answer","content":"No. Choice B. When the estimate is very close to what you need, you must do the exact math."}],"hard",("test-redo","estimate"))

# validation
ids=[x["id"] for x in Q]; assert len(ids)==len(set(ids))
for x in Q:
    if x["answerType"]=="mixed-number":
        assert mx(val(x["correctAnswer"]))==x["correctAnswer"], x["id"]
out="import { Question } from \"../types\";\n\n// Grade 5 Chapter 2: Fractions and Mixed Numbers. Generated; every answer computed with exact fractions.\nexport const chapter2Grade5Questions: Question[] = "+json.dumps(Q,ensure_ascii=False,indent=2)+";\n"
open(sys.argv[1],"w").write(out)
from collections import Counter
print(len(Q), Counter(x["sectionId"] for x in Q))
