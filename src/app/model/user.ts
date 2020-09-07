export class User {
  id: number;
  name: string;
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

  getName(): string {
    return this.name;
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
    return this.image_url;
  }

  getCreatedAt(): Date {
    return this.created_at;
  }
}
