export class User {
  id: number;
  last_name: string;
  first_name: string;
  gender: string;
  email: string;
  phone: string;
  birthday: Date;
  image_url: string;
  created_at: Date;

  constructor(fields: any) {
    for (const f in fields) {
      this[f] = fields[f];
    }
  }

  getId(): number {
    return this.id;
  }

  getLastName(): string {
    return this.last_name;
  }

  getFirstName(): string {
    return this.first_name;
  }

  getName(): string {
    return this.last_name + " " + this.first_name;
  }

  getEmail(): string {
    return this.email;
  }

  getPhone(): string {
    return this.phone;
  }

  getBirthday(): Date {
    return this.birthday;
  }

  getImageUrl(): string {
    if (!this.image_url) return "assets/icon/default-user.png";
    return this.image_url;
  }

  getCreatedAt(): Date {
    return this.created_at;
  }
}
