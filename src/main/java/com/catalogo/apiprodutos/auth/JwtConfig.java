package com.catalogo.apiprodutos.auth;

public class JwtConfig {

	public static final String  LLAVESECRETA = "alguna.clave.secreta.12345678";
	
	public static final String  RSA_PRIVADA = "-----BEGIN RSA PRIVATE KEY-----\n" + 
			"MIIEowIBAAKCAQEAs9/aqsiOmmew1QTRr/TZoywF3LzOQtatjXDz549rBgVzgfEU\n" + 
			"/Y1zCs8DT6gs4lsOwwFqinXKrvjm/o4nf7c822HsFD8e5vPrqg6LkD2+OUK/pnPM\n" + 
			"8S2RJbAlaSs9W+esgZCwFUF21RI/0fm6dE9VwZP56AEv1EXFvvd8jK4SzEgImccw\n" + 
			"FGVk2envoFIq9+UpltLg9Bek9ky8YiqTmVCl17XmvmN7bcTz1GAbtrYhi2bNRjAs\n" + 
			"6u41rkXhNT5B6NQs1+D6pWkvW2FhHxsoiB0XztTMEnm/l6pfRonAwNCu6ayEEj8L\n" + 
			"sce2iXSUceRR0yBxyHPd3vajAQeTd/eK4Vj64QIDAQABAoIBAGdWfNbO//Y/Cf1n\n" + 
			"llwDTCGNQhTtt4X4tZ5jvQxUfcToztJhQZDlealFAv75fEfSzmlD4ASJ5ZaeUn7+\n" + 
			"Bj0+dU0INcvv8331tndtgcqtXiKhcV9ceeo5JoFDcEq6V7b8I0QQbsjXYkDJCjdE\n" + 
			"xFTb20WqENG0FNlb+F5c6oYb35rR9NZdqhhXdnOfB2VjpkCH3uiTrID9BBP36Z1D\n" + 
			"ug+c11g2X7gKT7Gv34WWry7zLRvH81lAfKqd6xaHsc3Fq1n2ftFthKHjVloOywq4\n" + 
			"oOJd/r8mxEuyRfwpj/8ROJg8gfQp2UhrintT141yV5Cjdr965HwfrvFmcMfsioB5\n" + 
			"Z7CI1RECgYEA23lWouvK5Zvl8jFwLaP440nKLFyjDrDFUTADKtBVLRZjBbRH995z\n" + 
			"cnVZ7ASJmza3GM6PvTBLRWXRyBi1sRrvf73Nw1sjGABU0pjvsCaD5W0fpdQH2OPZ\n" + 
			"5ttPUddsQ21xir5pc1ZwkF/v4umjmD4qN/UiltsQXsuRfcvz8S3f1AUCgYEA0c9h\n" + 
			"xf5qu8Mbvx8iNFiwO+Gg5LLqCZZvC864BWsA0rIfWQRT76sk3doafZPYvlY6uOmj\n" + 
			"ZsfNf1LKNzH0bb/offg/DrBWjrboDPlIs/vciwCqKKCYeAqAZOMT7KQZmyMNX/e7\n" + 
			"fkvIDVRHn0h38HdTf65lbhcVn0viFOdMNXkhvi0CgYEAhULSwQ/s3afgYkN0erHy\n" + 
			"YIegc3k4JKZe2OIPOkLPRRYvv/nsLOvsK1Zn6DAFIbKCUFSz4ErfmV6ulxGx2Lyj\n" + 
			"KWwk8PZ4g41H86ua9dkdAwRUUAtDTIVk/JCzQ91KxlJAu97MBpU4ueEWti/o/nrY\n" + 
			"hauZegG/md9/EuPw1cNmAcUCgYBOFqmFT5PaHlwNXkEUyo2NPATuGckRmHPsKRxE\n" + 
			"p/a+dJ1GPF4hLcmi6LJDWuuoq99fQ1YVwvexE9c/g9A9qNeXSvXtOaR9qYXkjkOI\n" + 
			"+Yy0D6NFS8BzrTTsV7fqs4j0PK+VsFaQQxRKIbwmhIpfbYoeU4Jc3yqlB1E2BoBO\n" + 
			"xq7QYQKBgCxTqFjjl+ajtHg2Aomi/ZUMFk1SrM1RqwVTDKRBjrMwQZZK/IhLirAR\n" + 
			"1UTyWVCTrOsujAnW9JjUAq6CmlHkntUGEWIrZ5B+AVUoXjfjlBHdDuQRbO0tpsB2\n" + 
			"AhCM3Cikh9DSY+maL0xS17y/I9GsWgCn0rcGI+QsnxAhfNkKQinN\n" + 
			"-----END RSA PRIVATE KEY-----";
	
	
	public static final String  RSA_PUBLICA = "-----BEGIN PUBLIC KEY-----\n" + 
			"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAs9/aqsiOmmew1QTRr/TZ\n" + 
			"oywF3LzOQtatjXDz549rBgVzgfEU/Y1zCs8DT6gs4lsOwwFqinXKrvjm/o4nf7c8\n" + 
			"22HsFD8e5vPrqg6LkD2+OUK/pnPM8S2RJbAlaSs9W+esgZCwFUF21RI/0fm6dE9V\n" + 
			"wZP56AEv1EXFvvd8jK4SzEgImccwFGVk2envoFIq9+UpltLg9Bek9ky8YiqTmVCl\n" + 
			"17XmvmN7bcTz1GAbtrYhi2bNRjAs6u41rkXhNT5B6NQs1+D6pWkvW2FhHxsoiB0X\n" + 
			"ztTMEnm/l6pfRonAwNCu6ayEEj8Lsce2iXSUceRR0yBxyHPd3vajAQeTd/eK4Vj6\n" + 
			"4QIDAQAB\n" + 
			"-----END PUBLIC KEY-----";

	
}
