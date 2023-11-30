import {BookRating} from "./API";

export default class RatingConfig {
    overallEnjoymentWeighting: number;
    pacingWeighting: number;
    proseWeighting: number;
    qualityOfDiscussionWeighting: number;
    storytellingWeighting: number;
    complexityWeighting: number;
    characterDevelopmentWeighting: number;
    teachingWeighting: number;
    depthOfKnowledgeWeighting: number;
    relevanceWeighting: number;

    constructor(overallEnjoymentWeighting: number, pacingWeighting: number, prose: number, qualityOfDiscussion: number, storytelling: number, complexity: number, characterDevelopment: number, teaching: number, depthOfKnowledge: number, relevance: number) {
        this.overallEnjoymentWeighting = overallEnjoymentWeighting;
        this.pacingWeighting = pacingWeighting;
        this.proseWeighting = prose;
        this.qualityOfDiscussionWeighting = qualityOfDiscussion;
        this.storytellingWeighting = storytelling;
        this.complexityWeighting = complexity;
        this.characterDevelopmentWeighting = characterDevelopment;
        this.teachingWeighting = teaching;
        this.depthOfKnowledgeWeighting = depthOfKnowledge;
        this.relevanceWeighting = relevance;
    }

    public static getDefaultConfig():RatingConfig {
        return new RatingConfig(10,3,1,2,5,4,3,5,4,3)
    }

    public getRating(givenRating: BookRating): number {
        return givenRating.isFiction ? this.getFictionRating(givenRating) : this.getNonFictionRating(givenRating)
    }

    private getFictionRating(givenRating: BookRating): number {
        const totalWeight:number = this.overallEnjoymentWeighting +
            this.pacingWeighting +
            this.proseWeighting +
            this.qualityOfDiscussionWeighting +
            this.storytellingWeighting +
            this.complexityWeighting +
            this.relevanceWeighting;
        const totalValue:number = (givenRating.overallEnjoyment??0) * this.overallEnjoymentWeighting +
            (givenRating.pacing??0) * this.pacingWeighting +
            (givenRating.prose??0) * this.proseWeighting +
            (givenRating.qualityOfDiscussion??0) * this.qualityOfDiscussionWeighting +
            (givenRating.storytelling??0) * this.storytellingWeighting +
            (givenRating.complexity??0) * this.complexityWeighting +
            (givenRating.characterDevelopment??0) * this.characterDevelopmentWeighting;

        return totalValue/totalWeight;
    }

    private getNonFictionRating(givenRating: BookRating): number {
        const totalWeight:number = this.overallEnjoymentWeighting +
            this.pacingWeighting +
            this.proseWeighting +
            this.qualityOfDiscussionWeighting +
            this.teachingWeighting +
            this.depthOfKnowledgeWeighting +
            this.characterDevelopmentWeighting;
        const totalValue:number = (givenRating.overallEnjoyment??0) * this.overallEnjoymentWeighting +
            (givenRating.pacing??0) * this.pacingWeighting +
            (givenRating.prose??0) * this.proseWeighting +
            (givenRating.qualityOfDiscussion??0) * this.qualityOfDiscussionWeighting +
            (givenRating.teaching??0) * this.teachingWeighting +
            (givenRating.depthOfKnowledge??0) * this.depthOfKnowledgeWeighting +
            (givenRating.characterDevelopment??0) * this.characterDevelopmentWeighting;
        return totalValue/totalWeight;
    }
}