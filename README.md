# Gome

**Gome**는 Go로 작성된 경량 메신저 애플리케이션입니다. 이 프로젝트는 특히
**메일 전송**, **외부 명령어 실행(exec)**, **POST 요청**, 그리고 **웹훅(Webhook) 처리** 기능을 제공합니다.

## 주요 기능

- **메일링**: 사용자에게 이메일 알림을 전송할 수 있습니다.
- **exec 명령어 실행**: 외부 명령어를 실행하여 다양한 시스템 작업을 처리할 수 있습니다.
- **POST 요청**: HTTP POST 요청을 통해 다른 서비스와 통신할 수 있습니다.
- **웹훅(Webhook)**: 외부 서비스에서 전송하는 웹훅 데이터를 수신하고 처리할 수 있습니다.
- **TCP**: TCP 요청을 전송할 수 있습니다.
- **UDP**: UDP 요청을 전송할 수 있습니다.

## 설치 방법

1. 저장소를 클론합니다:
   ```bash
   git clone https://github.com/username/gome.git
   ```
2. 빌드합니다:
   웹서버 버전

   ```bash
   make build:web
   ```

   cli 버전

   ```
   go build
   ```
