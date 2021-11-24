MIGRATION_ISSUES_DETAILS["9548e434-c92d-4e54-90e3-f8f28c7bcade"] = [
{description: "<p>If the application declares explicitly or uses any of the feature provided by the Spring <code>org.springframework.plugin:spring-plugin-metadata<\/code> component, then check if there is a Quarkus Extensions with Spring API compatibility for the Spring <code>spring-plugin-metadata<\/code> component.<br/>If yes, then replace the <code>org.springframework.plugin:spring-plugin-metadata<\/code> dependency with the Quarkus extension.<br/>If no, consider rewrite the code that relies on this dependency leveraging the Quarkus Guides linked below. <\/p><p>Otherwise, if the application hasn\'t got this explicit Spring <code>org.springframework.plugin:spring-plugin-metadata<\/code> component dependency, it has been added transitively by another Spring component.<br/>Once the dependant Spring component will be removed, this issue will be fixed as well.<\/p>", ruleID: "springboot-generic-catchall-00100", issueName: "Spring component spring-plugin-metadata requires investigation",
problemSummaryID: "9548e434-c92d-4e54-90e3-f8f28c7bcade", files: [
{l:"spring-petclinic-rest-2.4.2.jar/BOOT-INF/lib/spring-plugin-metadata-2.0.0.RELEASE.jar", oc:"1"},
], resourceLinks: [
{h:"https://quarkus.io/guides/", t:"Quarkus - Guides"},
]},
];
onProblemSummaryLoaded("9548e434-c92d-4e54-90e3-f8f28c7bcade");