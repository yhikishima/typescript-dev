// app2.ts
class Greeter {
  constructor(public greeting: string) {
  }
  greet(): string {
    return 'Hello ' + this.greeting + '!';
  }
}

export = Greeter;