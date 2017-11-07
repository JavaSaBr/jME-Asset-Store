import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {UserEntity} from "../model/entity/user-entity";

@Injectable()
export class UserService{
  constructor(private readonly http: Http) {
  }

  public static readonly USER_BY_ID = "/api/users/get/user?id="

  public getUserById(id: number): Promise<UserEntity>{
    return this.http.post(UserService.USER_BY_ID + id.toLocaleString(),null)
      .toPromise()
      .then(response=>{
        let body = response.json();
        return body;
      });
  }
}
