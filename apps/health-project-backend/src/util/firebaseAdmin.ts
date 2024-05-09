import * as admin from 'firebase-admin';
import { App } from 'firebase-admin/app';
import * as firestore from 'firebase-admin/firestore';

const projectId = 'heath-project-402fb';

export const firebaseAdminApp: App =
  admin.apps.length > 0
    ? (admin.apps[0] as App)
    : admin.initializeApp({
        credential: admin.credential.cert({
          project_id: projectId,
          client_email:
            'firebase-adminsdk-5y5q8@heath-project-402fb.iam.gserviceaccount.com',
          private_key_id: '63ecea5ab0f8910044decb622cdae7b661de6a5f',
          private_key:
            '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCzDR6ls1V+7dvG\nRlRShU1+XO+du9ieYvBr9//D9IVxNiD5VlVvR9u3fgXXFE4COYO64RYUBRDpKkRW\nUhgCjwVQxEjRXhje8JjUZh0KJag0UFqt+cPhMY0GeGTloRr0mAPUSC1mx+tkqYSW\nM2+ZB2qy+YD6LG7hncPPevlmCBbjSsy9t9GL8r6U8l9NnlkQ19qxurPVgha5Vyg8\neRUBDD/f5NdRsRYXYHRcc3YyTqskNcYVZyom4QwqF7bvLJAxBiyLkjgaMdvAsUke\nvCPVBANGTf8U2y7TxMwXMHEIHweuVkzlab0MricqcEYSKh2kaRTmOull2mbMGLUW\nwTOi3kGVAgMBAAECggEAIkbGsS3tlgju47we9FU0ipY8ANQvGdMS93hYbCjpSszz\n7weJ/22gMDZd49itPlvITgQ898QogppmzqeUlRjQCbApyHrdBADHIRITSRgAZVNk\nqJ2B1CBqQOzXU+ZNhLl9MixHFL/83h5dlWtvV7pFwNFm0X2kFGjhTVzbVZ8C0qvz\nGj10kSZP+GObsygWs53t/ppiCPE0kn2mvBAZXSnc/yn+6+nLBNLyZrfgO7ki1Tv8\nVPoUIEIl5LN0kmRzFKv+Rk8bxxmk0gmmnIiwZEQEKYCLU9bmyakLd00H/8svYilg\nY9x9F0y3C6AvwpD8Lt+FISg5KK3ESKQisIMKgC5TQQKBgQDbrvyPLbo9cqgFmGm6\nYtF4J2Bd/pEyR8p3OXBFlTo+8kf45IXnyW/GRQ3qSjcaHLTdanZDkY+Jrh1Xtj8L\nDJuO2a3GWWOmgVMymfDDPlJ64GO+6RkzJ7W9Z2v3c72LITFOEt+rFnrbA5qvzp3L\nKgC9OU3JR4erABQHZvSVQBZInQKBgQDQppLM3T5mJPOgs4lifcZcvA0xFW+yyMFu\n/MYEKZoM0tyxlAu9APk5oIMSyo8BaXiiIPRjSoyZZu71xd00+AjGihMWlGqNUlWg\niKUULFWztQfnCNHi2Sg2y6vXDt4i8kF4KmKL/MZUBWLNLbMd9XSLaJVBZp6J4NKe\nVDpBB2QfWQKBgQCyilnqx6A4NooF2iP7fjp9q4rveWhp89zB3uW3N5vZ8rC5wIhv\no8/61L6FboGv8CqyVMb/DTsaC27/jTdZdIqso49Ox/FsLmj+lAwPsgP4p4uJagq3\n/4r9/yLJPsCKZZSbvk0X0DJS82/xeDvYFS/6mar1bfP97xdYGL2o2ygBJQKBgC7R\n0gsqckAVdp3O67swIfzZLdSfzMq/hbhT/FMeyrSp9F/cqq2ktEgcHo1u6pwUgL9Q\nycYmClq54FFCLxsdtUpn3VSpxSclHJXDU9etAyYqLzXGouJWfFGfblX5vhr1ZX+D\nc02aUR61frAv2wuT8qz9sNBWKKkjy98/YzsIX40xAoGBALeU+iQ2IvnJY1ALbyrg\nB11JjaXpgLDSjO1pVkmBW5+tVDITExc9d3yZoF91giQEC1DniAnsGmZZeUgdzh36\n1N25BFd9cIwqEBni3hqBsfdQ+RPoD1BG6i59gklLdZAwur0HQStwdrBFLdJp3DKB\nhbjZVeKUT9waBprnwWlLcG0v\n-----END PRIVATE KEY-----\n'.replace(
              /\\n/g,
              '\n'
            ),
        } as any),
        projectId: projectId,
        databaseURL: `https://${projectId}.firebaseio.com`,
        storageBucket: `${projectId}.appspot.com`,
      });

export const firebaseAdminFirestore = firestore.getFirestore(firebaseAdminApp);
