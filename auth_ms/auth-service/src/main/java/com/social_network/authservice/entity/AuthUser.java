package com.social_network.authservice.entity;

import java.util.UUID;
import com.social_network.authservice.dto.AuthUserResponseDto;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Entity
public class AuthUser {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private UUID id;
	private String email;
	private String password;
	private boolean isVerified;
	private Role role;

	public AuthUserResponseDto toAuthUserResponseDto() {
		return new AuthUserResponseDto(this.id, this.email, this.isVerified, this.role);
	}
}
