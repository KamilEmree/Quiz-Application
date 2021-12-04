const İnfoSection = document.getElementById('İnfo-Section');
const StartQuiz = document.getElementById('Start-Quiz');
const QuizSection = document.getElementById('Quiz-Section');
const NextButton = document.getElementById('Next-Question');
const QuestionTime = document.getElementById('Time');
const QuestionSection = document.getElementById('Quiz-Question');
const QuizList = document.getElementById('Quiz-List');
const QuizOption1 = document.getElementById('option-1');
const QuizOption2 = document.getElementById('option-2');
const QuizOption3 = document.getElementById('option-3');
const QuizOption4 = document.getElementById('option-4');
const QuizContent = document.getElementById('Quiz-Content');
const RemainingQuestion = document.getElementById('Question-Piece');
const FinishSection = document.getElementById('Finish-Section');
const ReplayQuiz = document.getElementById('Replay-Quiz');
const TrueQuestion = document.getElementById('True');
const FalseQuestion = document.getElementById('False');
const NullQuestion = document.getElementById('Null');
const ScoreQuiz = document.getElementById('Score');

const Questions = [
    {
        question : "Aşağıdakilerden hangisi Türkiye'nin en büyük yüzölçümüne sahip ilidir ?" ,
        answers : {
            option1 : "İstanbul" ,
            option2 : "Bursa" ,
            option3 : "Konya" ,
            option4 : "Ankara" 
        }
        
    }
    ,
    {
        question : "Aşağıdakilerden hangisi  Türkiye'nin Başkentidir ?" ,
        answers : {
            option1 : "İzmir" ,
            option2 : "Rize" ,
            option3 : "Ankara" ,
            option4 : "İstanbul" 
        }
    }
    ,
    {
        question : "Aşağıdakilerden hangisi  Türkiye'nin en çok çay üreten ilidir ?" ,
        answers : {
            option1 : "Erzurum" ,
            option2 : "Diyarbakır" ,
            option3 : "Yalova" ,
            option4 : "Rize" 
        }
    }
    ,
    {
        question : "Aşağıdakilerden hangisi  Türkiye'de suya komşu olmayan illerdendir ?" ,
        answers : {
            option1 : "Edirne" ,
            option2 : "Uşak" ,
            option3 : "Aydın" ,
            option4 : "Antalya" 
        }
    }
    ,
    {
        question : "Aşağıdakilerden hangisi Türkiye'de Suriye'ye komşu değildir ?" ,
        answers : {
            option1 : "Mardin" ,
            option2 : "Antakya" ,
            option3 : "Mersin" ,
            option4 : "Adana" 
        }
    }
    ,
    {
        question : "Aşağıdakilerden hangisi  Türkiye'nin illerinden birtanesi değildir?" ,
        answers : {
            option1 : "Samsun" ,
            option2 : "Tokat" ,
            option3 : "Selanik" ,
            option4 : "Giresun" 
        }
    }
    ,
    {
        question : "Aşağıdakilerden hangisi  Türkiye'nin en çok nüfuslu ilidir ?" ,
        answers : {
            option1 : "İstanbul" ,
            option2 : "Balıkesir" ,
            option3 : "Eskişehir" ,
            option4 : "Ankara" 
        }
    }
    ,
    {
        question : "Aşağıdakilerden hangisi  Türkiye'nin en küçük yüzölçümüne sahip ilidir ?" ,
        answers : {
            option1 : "Tunceli" ,
            option2 : "Yalova" ,
            option3 : "Batman" ,
            option4 : "Bayburt" 
        }
    }
    ,
    {
        question : "Aşağıdakilerden hangisi  Türkiye'de en çok turist alan ilidir ?" ,
        answers : {
            option1 : "Gümüşhane" ,
            option2 : "Antalya" ,
            option3 : "Sivas" ,
            option4 : "Yozgat" 
        }
    }
    ,
    {
        question : "Aşağıdakilerden hangisi  Türkiye'nin bor bulunan illerinden birtanesi değildir ?" ,
        answers : {
            option1 : "Kütahya" ,
            option2 : "Eskişehir" ,
            option3 : "Amasya" ,
            option4 : "Balıkesir" 
        }
    }
]

const TrueAnswer = [
    {
        trueAnswer : Questions[0].answers.option3         
    }
    ,
    {
        trueAnswer : Questions[1].answers.option3         
    }
    ,
    {
        trueAnswer : Questions[2].answers.option4         
    }
    ,
    {
        trueAnswer : Questions[3].answers.option2        
    }
    ,
    {
        trueAnswer : Questions[4].answers.option4         
    }
    ,
    {
        trueAnswer : Questions[5].answers.option3         
    }
    ,
    {
        trueAnswer : Questions[6].answers.option1         
    }
    ,
    {
        trueAnswer : Questions[7].answers.option2         
    }
    ,
    {
        trueAnswer : Questions[8].answers.option2         
    }
    ,
    {
        trueAnswer : Questions[9].answers.option3         
    }
]

let UsersAnswer = []
let intervalId;
let Time = 20;
let QuestionNumber = 0;
let RemainingQ = 1;
let clicks = 0;
let True = 0;
let False = 0;
let Null = 0;
let Score = 0;

function Startbtn(){
    True = 0;
    False = 0;
    Null = 0;
    Score = 0;
    İnfoSection.style.display = 'none';
    QuizSection.style.display = 'block'; 
    RemainingQuestion.innerText = '1/10';
    WriteToOptions();
}

function WriteToOptions(){
    let QuestionOption = Questions[QuestionNumber];
    SendToHtml(QuestionOption);
    intervalId = setInterval(QuizTime,1000);
}

function NextQuestion(){
    RightQuestion();
    CheckIt(UsersAnswer.last())
    clearInterval(intervalId);
    RemainingQ++;
    QuestionNumber++;
    Time = 21;
    if(QuestionNumber === 10){
        QuizSection.style.display = 'none';
        FinishSection.style.display = 'block';
        clearInterval(intervalId);
        UsersAnswer = [];
    }else{
        WriteToOptions();
        RemainingQuestion.innerText = `${RemainingQ}/10`
        QuizOption1.style.backgroundColor = '#ced6e0';
        QuizOption1.style.color = '#111';
        QuizOption2.style.backgroundColor = '#ced6e0';
        QuizOption2.style.color = '#111';
        QuizOption3.style.backgroundColor = '#ced6e0';
        QuizOption3.style.color = '#111';
        QuizOption4.style.backgroundColor = '#ced6e0';
        QuizOption4.style.color = '#111';
    }
}

function SendToHtml(element){
    QuestionSection.innerText = element.question;
    QuizOption1.innerText = element.answers.option1; 
    QuizOption2.innerText = element.answers.option2; 
    QuizOption3.innerText = element.answers.option3; 
    QuizOption4.innerText = element.answers.option4;
}

function SelectToOptions(event){
    if(clicks === 0){
        QuizOption1.style.backgroundColor = '#ced6e0';
        QuizOption1.style.color = '#111';
        QuizOption2.style.backgroundColor = '#ced6e0';
        QuizOption2.style.color = '#111';
        QuizOption3.style.backgroundColor = '#ced6e0';
        QuizOption3.style.color = '#111';
        QuizOption4.style.backgroundColor = '#ced6e0';
        QuizOption4.style.color = '#111';
        clicks++;
    }
    
    if(event.currentTarget.style.backgroundColor = '#576574'){
        event.currentTarget.style.color = '#fff';
        clicks = 0;
        RightQuestion(event.target.innerText);
    }
}

function ReplayQ(){
    FinishSection.style.display = 'none';
    İnfoSection.style.display = 'block';
    QuestionNumber = 0;
    RemainingQ = 1; 
}

function RightQuestion(answer){
    UsersAnswer.push(answer);
    Array.prototype.last = function(){
        return this[this.length - 2];
    };
}

function CheckIt(answer){
    if(answer === TrueAnswer[QuestionNumber].trueAnswer){
        True++;
        TrueQuestion.innerHTML = True;
        Score++;
        let Total = Score * 10;
        ScoreQuiz.innerHTML = Total;
    }else if(answer === undefined){
        Null++;
        NullQuestion.innerText = Null;
    }else if(answer !== TrueAnswer[QuestionNumber].trueAnswer){
        False++;
        FalseQuestion.innerHTML = False;
    } 
}

function QuizTime(){
    Time--;
    QuestionTime.innerText = Time;
    if(Time === 0){
        NextQuestion();
    }
}