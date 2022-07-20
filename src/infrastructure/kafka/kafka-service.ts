import { ConfigService } from "@nestjs/config";
import { Transport } from "@nestjs/microservices";

export class KafkaService {
  constructor() {}
  getOptions(groupId: string, broker: string) {
    return {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: [broker],
        },
        consumer: {
          groupId,
        },
      },
    };
  }
}
