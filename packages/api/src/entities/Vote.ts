/* istanbul ignore file */
import { Entity, IdentifiedReference, ManyToOne, Property } from '@mikro-orm/core';
import { ConstructorValues } from '../utils/types';
import { Node } from './Node';
import { Project } from './Project';

export type ProjectConstructorValues = ConstructorValues<Vote>;
type ProjectPropertyKeys = keyof ProjectConstructorValues;

@Entity()
export class Vote extends Node<Vote> {
  @ManyToOne(() => Project)
  previousProject: IdentifiedReference<Project>;

  @ManyToOne(() => Project)
  currentProject: IdentifiedReference<Project>;

  @Property()
  currentProjectChosen: boolean;

  constructor({
    previousProject,
    currentProject,
    currentProjectChosen: currentTeamChosen,
    ...extraValues
  }: ProjectConstructorValues) {
    super(extraValues);

    this.previousProject = previousProject;
    this.currentProject = currentProject;
    this.currentProjectChosen = currentTeamChosen;
  }

  getSafeKeys(): ProjectPropertyKeys[] {
    return ['previousProject', 'currentProject', 'currentProjectChosen'];
  }
}
