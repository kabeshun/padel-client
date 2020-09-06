export class Facility {
  id: number;
  name: string;
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

  getImageUrl(): string {
    return this.image_url;
  }

  getCreatedAt(): Date {
    return this.created_at;
  }
}
