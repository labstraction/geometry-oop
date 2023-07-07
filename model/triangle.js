class Triangle{

    constructor(...args){

        // this.segmentArray = [];

        // for (let i = 0; i < args.length - 3; i += 2) {
        //     const xCoordA = array[i];
        //     const yCoordA = array[i + 1];
        //     const xCoordB = array[i + 2];
        //     const yCoordB = array[i + 3];

        //     const segment = new Segment(xCoordA, yCoordA, xCoordB, yCoordB)
        //     this.segmentArray.push(segment);
        // }

        this.segmentAB = new Segment(xA,yA,xB,yB);
        this.segmentBC = new Segment(xB,yB,xC,yC);
        this.segmentCA = new Segment(xC,yC,xA,yA);
    }


    get perimeter(){
        return this.segmentAB.length + this.segmentBC.length + this.segmentCA.length;
    }


    get area(){
        const halfPerimeter = this.perimeter / 2;
        const hPminusAB = halfPerimeter - this.segmentAB.length;
        const hPminusBC = halfPerimeter - this.segmentBC.length;
        const hPminusCA = halfPerimeter - this.segmentCA.length;
        const area = Math.sqrt(halfPerimeter * hPminusAB * hPminusBC * hPminusCA);
        return area;
    }

    isRectangle(){
        
        // if (this.segmentAB.length ** 2 === this.segmentBC.length ** 2 + this.segmentCA.length ** 2) {
        //     return true;
        // }

        // if (this.segmentBC.length ** 2 === this.segmentAB.length ** 2 + this.segmentCA.length ** 2) {
        //     return true;
        // }

        // if (this.segmentCA.length ** 2 === this.segmentAB.length ** 2 + this.segmentBC.length ** 2) {
        //     return true;
        // }

        // return false;

        // const segmentArray = [this.segmentAB, this.segmentBC, this.segmentCA];

        // for (let i = 0; i < segmentArray.length; i++) {
        //     const segment = segmentArray[i];
        //     let nextIndex = i + 1;
        //     if (nextIndex > segmentArray.length - 1) {
        //         nextIndex = 0;
        //     }
        //     const nextSegment = segmentArray[nextIndex];
        //     let nextNextIndex = nextIndex + 1;
        //     if (nextNextIndex > segmentArray.length - 1) {
        //         nextNextIndex = 0;
        //     }
        //     const nextNextSegement = segmentArray[nextNextIndex];

        //     if (segment.length ** 2 === nextSegment.length ** 2 + nextNextSegement.length ** 2 ) {
        //         return true;
        //     }

            
        // }

        // return false;

        const isHypotenuseAB = this.segmentAB.length ** 2 === this.segmentBC.length ** 2 + this.segmentCA.length ** 2;
        const isHypotenuseBC = this.segmentBC.length ** 2 === this.segmentAB.length ** 2 + this.segmentCA.length ** 2;
        const isHypotenuseCA = this.segmentCA.length ** 2 === this.segmentAB.length ** 2 + this.segmentBC.length ** 2;

        if (isHypotenuseAB || isHypotenuseBC || isHypotenuseCA) {
            return true;
        }

        return false;
    }

}