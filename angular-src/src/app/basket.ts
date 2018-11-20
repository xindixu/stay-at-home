export class Basket {

	constructor(
		public meat: any,
		public vegetable: any,
		public dairy: any,
		public grain: any,
		public fruit: any
	){}

	stringify(){
		// ex: {"meat":{},"vegetable":{"Carrot":true,"Potatoes":true},"dairy":{},"grain":{},"fruit":{}}
		// angery not working SAD so sleeeeeeeeeeeepppppppppyyyyyy

		// so try that npm checklist thingy, we don't need this probably
		let result = "";
		console.log(this);
		for(let category in this){
			console.log(category);
			for(let item in category){
				console.log(item);
			}
		}
		console.log("from Basket class, stringify()")
		console.log(result);
		return result;
	}
}
