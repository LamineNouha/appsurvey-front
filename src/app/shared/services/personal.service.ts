import {StorageService} from "app/shared/services/storage.service";
import {Injectable} from "@angular/core";
import {GenericService} from "./generic.service";
import {Http} from "@angular/http";
import {Personal} from "../models/personal.model";
import {Config} from "../config";

@Injectable()
export class PersonalService extends GenericService {
  loggedPersonal: Personal;

  constructor(private http: Http, private storageService: StorageService) {
    super();
    this.loggedPersonal = <Personal> storageService.read('personal');
  }

  getPersonalById(epersonalId) {
    this.headers.set("Authorization", "Bearer " + this.storageService.read("token"));
    const url = Config.baseUrl + "/personal/" + epersonalId;

    return this.http.get(url, {
      headers: this.headers
    })
      .map(res => res.json())
      .catch(this.handleErrors);
  }

/*
  getEnseignantBanques(enseignantId: number) {
    this.headers.set("Authorization", "Bearer " + this.storageService.read("token"));
    const url = Config.baseUrl + "/enseignant/" + enseignantId + "/banques";

    return this.http.get(url, {
      headers: this.headers
    })
      .map(res => res.json())
      .catch(this.handleErrors);
  }

  checkIfEnseignantHasRole(roleId: number) {
    let hasRole = false;
    if (!this.loggedEnseignant.privileges) {
      return false;
    }
    this.loggedEnseignant.privileges.forEach(function (privilege) {
      if (privilege.id_Privilege === roleId) {
        hasRole = true;
      }
    });
    return hasRole;
  }

  getEvaluateurBanques(id_Enseignant: number) {
    this.headers.set("Authorization", "Bearer " + this.storageService.read("token"));
    const url = Config.baseUrl + "/enseignant/" + id_Enseignant + "/evaluation";

    return this.http.get(url, {
      headers: this.headers
    })
      .map(res => res.json())
      .catch(this.handleErrors);
  }

  getEnseignantNotifications(id_Enseignant: number) {
    this.headers.set("Authorization", "Bearer " + this.storageService.read("token"));
    const url = Config.baseUrl + "/enseignant/" + id_Enseignant + "/notification";

    return this.http.get(url, {
      headers: this.headers
    })
      .map(res => res.json())
      .catch(this.handleErrors);
  }

  addUserNotification(id_Proprietaire, note: string, id_Evaluateur: number, id_Banque: number) {
    this.headers.set("Authorization", "Bearer " + this.storageService.read("token"));
    const url = Config.baseUrl + "/enseignant/" + id_Proprietaire + "/notification/add";
    return this.http.post(url, {
      message: note,
      id_Evaluateur: id_Evaluateur,
      id_Banque: id_Banque
    }, {
      headers: this.headers
    }).map(res => res.json())
      .catch(this.handleErrors);
  }

  sendReply(message: string, id_Enseignant: number, id_Notification: number) {
    this.headers.set("Authorization", "Bearer " + this.storageService.read("token"));
    const url = Config.baseUrl + "/enseignant/" + id_Enseignant + "/notification/" + id_Notification + "/conversation/add";
    console.log(url);
    console.log(JSON.stringify({
      message: message
    }));
    return this.http.post(url, {
      message: message
    }, {
      headers: this.headers
    }).map(res => res.json())
      .catch(this.handleErrors);
  }*/
}
