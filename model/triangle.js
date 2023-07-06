class Triangle{

    constructor(xA, yA, xB, yB, xC, yC){

        this.segmentAB = new Segment(xA,yA,xB,yB);
        this.segmentBC = new Segment(xB,yB,xC,yC);
        this.segmentCA = new Segment(xC,yC,xA,yA);
    }


    get perimeter(){
        return this.segmentAB.length + this.segmentBC.length + this.segmentCA.length;
    }


    get Area(){

    }

    isRectangle(){
        
    }

}