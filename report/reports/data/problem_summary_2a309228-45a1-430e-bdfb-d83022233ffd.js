MIGRATION_ISSUES_DETAILS["2a309228-45a1-430e-bdfb-d83022233ffd"] = [
{description: "<p>If the application declares explicitly or uses any of the feature provided by the Spring <code>org.springframework.data:spring-data-jdbc-core<\/code> component, then check if there is a Quarkus Extensions with Spring API compatibility for the Spring <code>spring-data-jdbc-core<\/code> component.<br/>If yes, then replace the <code>org.springframework.data:spring-data-jdbc-core<\/code> dependency with the Quarkus extension.<br/>If no, consider rewrite the code that relies on this dependency leveraging the Quarkus Guides linked below. <\/p><p>Otherwise, if the application hasn\'t got this explicit Spring <code>org.springframework.data:spring-data-jdbc-core<\/code> component dependency, it has been added transitively by another Spring component.<br/>Once the dependant Spring component will be removed, this issue will be fixed as well.<\/p>", ruleID: "springboot-generic-catchall-00100", issueName: "Spring component spring-data-jdbc-core requires investigation",
problemSummaryID: "2a309228-45a1-430e-bdfb-d83022233ffd", files: [
{l:"spring-petclinic-rest-2.4.2.jar/BOOT-INF/lib/spring-data-jdbc-core-1.2.1.RELEASE.jar", oc:"1"},
], resourceLinks: [
{h:"https://quarkus.io/guides/", t:"Quarkus - Guides"},
]},
];
onProblemSummaryLoaded("2a309228-45a1-430e-bdfb-d83022233ffd");