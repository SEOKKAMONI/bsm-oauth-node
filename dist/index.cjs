"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  APIError: () => APIError,
  BsmOauth: () => BsmOauth,
  default: () => BsmOauth,
  isStudent: () => isStudent,
  isTeacher: () => isTeacher
});
module.exports = __toCommonJS(src_exports);

// src/error.ts
var APIError = class _APIError extends Error {
  constructor(status, message) {
    super(`${_APIError.makeMessage(status, message)}`);
    this.status = status;
  }
  static makeMessage(status, message) {
    if (status && message) {
      return `[${status}]: ${message}`;
    }
    if (status) {
      return `[${status}]: \uC5D0\uB7EC \uBA54\uC138\uC9C0\uAC00 \uBE44\uC5B4\uC788\uC2B5\uB2C8\uB2E4.`;
    }
    return "[500]: \uC11C\uBC84\uC5D0\uC11C \uC54C \uC218 \uC5C6\uB294 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";
  }
};

// src/core.ts
var Client = class {
  constructor(options = {}) {
    this.options = options;
  }
};
var request = async (path, body) => {
  const url = "https://auth.bssm.kro.kr/api/oauth".concat(path);
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  return await response.json();
};
function isStudent(user) {
  return user.role === "STUDENT" /* STUDENT */;
}
function isTeacher(user) {
  return user.role === "TEACHER" /* TEACHER */;
}
function isFalsy(value) {
  return value === false || value === null || value === 0 || value === "" || value === void 0 || isNaN(value);
}

// src/resources/token.ts
var Token = class extends Client {
  constructor(options) {
    super(options);
  }
  async get(authCode) {
    try {
      if (isFalsy(authCode)) {
        throw new APIError(404, "\uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 authCode\uC785\uB2C8\uB2E4.");
      }
      const data = await request("/token", {
        authCode,
        ...this.options
      });
      return data.token;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
};

// src/resources/user.ts
var User = class extends Client {
  constructor(options) {
    super(options);
  }
  async get(token) {
    try {
      if (isFalsy(token)) {
        throw new APIError(404, "\uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 token\uC785\uB2C8\uB2E4.");
      }
      const data = await request("/resource", {
        token,
        ...this.options
      });
      if (isStudent(data.user)) {
        return data.user;
      }
      if (isTeacher(data.user)) {
        return data.user;
      }
      return data.user;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
};

// src/oauth.ts
var BsmOauth = class {
  constructor({ clientId, clientSecret }) {
    if (clientId == void 0 || clientSecret == void 0) {
      throw new APIError(400, "\uC798\uBABB\uB41C \uD074\uB77C\uC774\uC5B8\uD2B8 \uC815\uBCF4\uC785\uB2C8\uB2E4.");
    }
    this.options = { clientId, clientSecret };
    this.user = new User(this.options);
    this.token = new Token(this.options);
  }
};
//# sourceMappingURL=index.cjs.map
