export class Facility {
  id: number;
  name: string;
  description: string;
  address: string;
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

  getDescription(): string {
    return this.description;
  }

  getAddress(): string {
    return this.address;
  }

  getImageUrl(): string {
    return this.image_url;
  }

  getCreatedAt(): Date {
    return this.created_at;
  }
}
