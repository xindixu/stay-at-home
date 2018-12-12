export class Basket {
	basket: any[];

	constructor(
		public meat: any,
		public vegetable: any,
		public dairy: any,
		public grain: any,
		public fruit: any
	){
		this.basket = [meat,vegetable,dairy,grain,fruit];
	}

	stringify(){
		// angery not working SAD so sleeeeeeeeeeeepppppppppyyyyyy
		// so try that npm checklist thingy, we don't need this probably
		//{Chicken: false, Ground Beef: true}
		let result = [];
		//console.log(this.basket);
		for(let category in this.basket){
			for(let item in this.basket[category]){
				if(this.basket[category][item])
					result.push(item.toLowerCase());
			}
		}
		return result.join(",");
	}
}
