export class BookingDetail {
  key ?:number;
  vehicleDetails?:DetailVehicle;
  from?: any;
  to?: any;
  location?: string;
  total?: any;
  name?:string;
  accountId?:number;
 address?:string;
  phone?:any;
  bod?:any;
  cardId?: string;
  status?: number;
}

export class DetailVehicle {
  owner?:any;
  phone?:any;
  imageList?: string[];
  color?:any;
  fuel?:any;
  seat?:any;
  featureList?: string[];
  price?:any;
  totalRun?:number;
  feedBackList?: FeedbackList[];
  location?:any;
  rule?:any;
}

export class FeedbackList{
  name?:any;
  point?:any;
  content?:any;

}
