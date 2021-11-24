MIGRATION_ISSUES_DETAILS["a086be1d-51f4-493f-9979-06b07b5901e3"] = [
{description: "<p>If the application declares explicitly or uses any of the feature provided by the Spring <code>org.springframework.data:spring-data-commons<\/code> component, then check if there is a Quarkus Extensions with Spring API compatibility for the Spring <code>spring-data-commons<\/code> component.<br/>If yes, then replace the <code>org.springframework.data:spring-data-commons<\/code> dependency with the Quarkus extension.<br/>If no, consider rewrite the code that relies on this dependency leveraging the Quarkus Guides linked below. <\/p><p>Otherwise, if the application hasn\'t got this explicit Spring <code>org.springframework.data:spring-data-commons<\/code> component dependency, it has been added transitively by another Spring component.<br/>Once the dependant Spring component will be removed, this issue will be fixed as well.<\/p>", ruleID: "springboot-generic-catchall-00100", issueName: "Spring component spring-data-commons requires investigation",
problemSummaryID: "a086be1d-51f4-493f-9979-06b07b5901e3", files: [
{l:"spring-petclinic-rest-2.4.2.jar/BOOT-INF/lib/spring-data-commons-2.4.3.jar", oc:"1"},
], resourceLinks: [
{h:"https://quarkus.io/guides/", t:"Quarkus - Guides"},
]},
];
onProblemSummaryLoaded("a086be1d-51f4-493f-9979-06b07b5901e3");