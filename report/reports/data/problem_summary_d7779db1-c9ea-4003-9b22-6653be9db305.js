MIGRATION_ISSUES_DETAILS["d7779db1-c9ea-4003-9b22-6653be9db305"] = [
{description: "<p>If the application declares explicitly or uses any of the feature provided by the Spring <code>org.springframework.plugin:spring-plugin-core<\/code> component, then check if there is a Quarkus Extensions with Spring API compatibility for the Spring <code>spring-plugin-core<\/code> component.<br/>If yes, then replace the <code>org.springframework.plugin:spring-plugin-core<\/code> dependency with the Quarkus extension.<br/>If no, consider rewrite the code that relies on this dependency leveraging the Quarkus Guides linked below. <\/p><p>Otherwise, if the application hasn\'t got this explicit Spring <code>org.springframework.plugin:spring-plugin-core<\/code> component dependency, it has been added transitively by another Spring component.<br/>Once the dependant Spring component will be removed, this issue will be fixed as well.<\/p>", ruleID: "springboot-generic-catchall-00100", issueName: "Spring component spring-plugin-core requires investigation",
problemSummaryID: "d7779db1-c9ea-4003-9b22-6653be9db305", files: [
{l:"spring-petclinic-rest-2.4.2.jar/BOOT-INF/lib/spring-plugin-core-2.0.0.RELEASE.jar", oc:"1"},
], resourceLinks: [
{h:"https://quarkus.io/guides/", t:"Quarkus - Guides"},
]},
];
onProblemSummaryLoaded("d7779db1-c9ea-4003-9b22-6653be9db305");