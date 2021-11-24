MIGRATION_ISSUES_DETAILS["a8a2fe12-acf0-40a9-b634-97820a780e15"] = [
{description: "<p>If the application declares explicitly or uses any of the feature provided by the Spring <code>org.springframework.retry:spring-retry<\/code> component, then check if there is a Quarkus Extensions with Spring API compatibility for the Spring <code>spring-retry<\/code> component.<br/>If yes, then replace the <code>org.springframework.retry:spring-retry<\/code> dependency with the Quarkus extension.<br/>If no, consider rewrite the code that relies on this dependency leveraging the Quarkus Guides linked below. <\/p><p>Otherwise, if the application hasn\'t got this explicit Spring <code>org.springframework.retry:spring-retry<\/code> component dependency, it has been added transitively by another Spring component.<br/>Once the dependant Spring component will be removed, this issue will be fixed as well.<\/p>", ruleID: "springboot-generic-catchall-00100", issueName: "Spring component spring-retry requires investigation",
problemSummaryID: "a8a2fe12-acf0-40a9-b634-97820a780e15", files: [
{l:"spring-petclinic-rest-2.4.2.jar/BOOT-INF/lib/spring-retry-1.3.1.jar", oc:"1"},
], resourceLinks: [
{h:"https://quarkus.io/guides/", t:"Quarkus - Guides"},
]},
];
onProblemSummaryLoaded("a8a2fe12-acf0-40a9-b634-97820a780e15");