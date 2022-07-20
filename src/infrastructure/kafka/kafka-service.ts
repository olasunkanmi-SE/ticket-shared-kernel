import { ConfigService } from "@nestjs/config";
import { Transport } from "@nestjs/microservices";

export class KafkaService {
  static getOptions(groupId: string, broker: string, transport: number) {
    return {
      transport,
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
