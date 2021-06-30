import { Entity, CreateDateColumn, UpdateDateColumn, PrimaryColumn, Column } from 'typeorm'

import { v4 as uuid } from 'uuid' // identificador universal unico

@Entity('events')
class Event {

  @PrimaryColumn()
  id: string;

  @Column()
  nomeevento: string;

  @Column()
  local: string;

  @Column()
  diasemana: string;

  @Column()
  horario: string;

  @Column()
  like: number;

  @Column()
  dislike: number;
    
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Event }
