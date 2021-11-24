MIGRATION_ISSUES_DETAILS["132aee8d-c731-48a3-aac2-c31e15b22004"] = [
{description: "<p>If the application declares explicitly or uses any of the feature provided by the Spring <code>org.springframework.samples:spring-petclinic-rest<\/code> component, then check if there is a Quarkus Extensions with Spring API compatibility for the Spring <code>spring-petclinic-rest<\/code> component.<br/>If yes, then replace the <code>org.springframework.samples:spring-petclinic-rest<\/code> dependency with the Quarkus extension.<br/>If no, consider rewrite the code that relies on this dependency leveraging the Quarkus Guides linked below. <\/p><p>Otherwise, if the application hasn\'t got this explicit Spring <code>org.springframework.samples:spring-petclinic-rest<\/code> component dependency, it has been added transitively by another Spring component.<br/>Once the dependant Spring component will be removed, this issue will be fixed as well.<\/p>", ruleID: "springboot-generic-catchall-00100", issueName: "Spring component spring-petclinic-rest requires investigation",
problemSummaryID: "132aee8d-c731-48a3-aac2-c31e15b22004", files: [
{l:"spring-petclinic-rest-2.4.2.jar", oc:"1"},
], resourceLinks: [
{h:"https://quarkus.io/guides/", t:"Quarkus - Guides"},
]},
];
onProblemSummaryLoaded("132aee8d-c731-48a3-aac2-c31e15b22004");