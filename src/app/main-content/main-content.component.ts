import { Component, OnInit, ViewChild } from '@angular/core';
import { NlpHttpService } from '../nlp-http.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  i: number=0;
  intent: string;
  // questions: string[] = ["What is Java?","How is Java and SpringBoot related?","Elaborate on Docker?","Example of Angular?"];
  public questions;
  ques1=this.questions[0];
  input1;
 
  constructor(public nlpservice:NlpHttpService) { }

  // public uniqueId: string;
  // public searchString: string;

  // public quesinfo = {
  //   questionId : this.uniqueId,
  //   question: this.searchString
  // };

  ngOnInit() {
    this.nlpservice.getAllQuestions().subscribe((data) => this.questions = data);
  }

  showQuestions(index:number, arr:string[]): void{
    this.ques1=arr[index];
  }

  getNext(): void{
    if(this.i==this.questions.length-1){
      alert("Questions over!");
    }
    else{
      this.i++;
      this.showQuestions(this.i,this.questions);
    }
    
  }

  getPrevious(): void{
    if(this.i==0){
      alert("No questions before this!");
    }
    else{
      this.i--;
      this.showQuestions(this.i,this.questions);
    }
  }

  sendKnowledgeData(input1):void{
    this.intent="Knowledge";
    console.log("Intent: "+this.intent);
    console.log("Edited Ques:" +this.input1);
  }

  sendComprehensionData(input1):void{
    this.intent="Comprehension";
    console.log("Intent: "+this.intent);
    console.log("Edited Ques:" +this.input1);
  }

  sendApplicationData(input1):void{
    this.intent="Application";
    console.log("Intent: "+this.intent);
    console.log("Edited Ques:" +this.input1);
  }

  sendAnalysisData(input1):void{
    this.intent="Analysis";
    console.log("Intent: "+this.intent);
    console.log("Edited Ques:" +this.input1);
  }

  sendSynthesisData(input1):void{
    this.intent="Synthesis";
    console.log("Intent: "+this.intent);
    console.log("Edited Ques:" +this.input1);
  }

  sendEvaluationData(input1):void{
    this.intent="Evaluation";
    console.log("Intent: "+this.intent);
    console.log("Edited Ques:" +this.input1);
  }
}
