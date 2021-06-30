import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEvents1623344038139 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "events",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "nomeevento",
                        type: "varchar"
                    },
                    {
                        name: "local",
                        type: "varchar"
                    },
                    {
                        name: "diasemana",
                        type: "varchar"
                    },
                    {
                        name: "horario",
                        type: "varchar"
                    },
                    {
                        name: "like",
                        type: "number",
                        isNullable: true,
                    },
                    {
                        name: "dislike",
                        type: "number",
                        isNullable: true,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("events")
    }

}
